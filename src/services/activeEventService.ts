import {
    collection,
    getDocs,
    query,
    where,
    Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";

export interface ActiveEventConfig {
    id: string;
    name: string;
    label: string;
    description: string;
    ctaLabel?: string;
    ctaHref?: string;
    goLiveAt: string;   // ISO
    hideAfter?: string; // ISO
}

export async function fetchActiveEvent(): Promise<ActiveEventConfig | null> {
    try {
        console.log("[events] fetching active event…");

        const eventsRef = collection(db, "events");

        // Simple query: equality only, no composite index needed
        const q = query(eventsRef, where("bannerEnabled", "==", true));
        const snap = await getDocs(q);

        if (snap.empty) {
            console.log("[events] no bannerEnabled events found");
            return null;
        }

        const now = new Date();
        const candidates: ActiveEventConfig[] = [];

        snap.forEach((doc) => {
            const data = doc.data() as {
                name: string;
                label: string;
                description: string;
                ctaLabel?: string;
                ctaHref?: string;
                goLiveAt: Timestamp;
                hideAfter?: Timestamp;
            };

            if (!data.goLiveAt) {
                console.warn("[events] doc missing goLiveAt:", doc.id);
                return;
            }

            const goLiveAtDate = data.goLiveAt.toDate();
            const hideAfterDate = data.hideAfter?.toDate();

            // Skip fully expired events
            if (hideAfterDate && hideAfterDate < now) return;

            candidates.push({
                id: doc.id,
                name: data.name,
                label: data.label,
                description: data.description,
                ctaLabel: data.ctaLabel,
                ctaHref: data.ctaHref,
                goLiveAt: goLiveAtDate.toISOString(),
                hideAfter: hideAfterDate?.toISOString(),
            });
        });

        if (candidates.length === 0) {
            console.log("[events] no non-expired candidates after filtering");
            return null;
        }

        // Pick the soonest
        candidates.sort(
            (a, b) => new Date(a.goLiveAt).getTime() - new Date(b.goLiveAt).getTime()
        );

        console.log("[events] picked active event:", candidates[0]);
        return candidates[0];
    } catch (err) {
        console.error("[events] error fetching active event", err);
        return null; // ✅ never throw, never crash app
    }
}
