import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Divider,
    Stack,
    Chip,
    Link as MLink,
    List,
    ListItem,
    ListItemText,
    Button,
} from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Seo from "../components/seo/seo";

const BLUE = "#0E4F6E";
const SAND = "#CBB294";
const INK = "#0F172A";

type Item = { id: string; label: string };

const TOC: Item[] = [
    { id: "abstract", label: "Abstract" },
    { id: "background", label: "Background" },
    { id: "external-causes", label: "External Causes" },
    { id: "internal-causes", label: "Internal Causes" },
    { id: "failed-efforts", label: "Efforts That Failed" },
    { id: "solution", label: "The Blockchain Solution" },
    { id: "about-alkebuleum", label: "About Alkebuleum" },
    { id: "goals-targets", label: "Goals & Targets" },
    { id: "protocols", label: "Protocols & Consensus" },
    { id: "constraints", label: "Community Constraints" },
    { id: "approach", label: "Alkebuleum Approach" },
    { id: "consensus-eras", label: "Consensus Eras: PoRA → PoSR → PoWU" },
    { id: "governance", label: "Governance & DAO" },
    { id: "token", label: "Token Details (AKE)" },
    { id: "thanks", label: "Thanks & Attribution" },
];

const SectionTitle: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => (
    <Typography
        id={id}
        variant="h5"
        sx={{
            scrollMarginTop: 100,
            fontWeight: 800,
            color: INK,
            letterSpacing: "-0.2px",
            mb: 1.5,
        }}
    >
        {children}
    </Typography>
);

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Typography variant="body1" sx={{ lineHeight: 1.85, color: "text.secondary", mb: 2 }}>
        {children}
    </Typography>
);

export default function Whitepaper() {
    return (

        <Box sx={{ py: { xs: 6, md: 10 }, background: "linear-gradient(180deg,#FFFFFF 0%, rgba(203,178,148,0.08) 100%)" }}>
            <Seo
                title="Alkebuleum Whitepaper (Summary)"
                description="Concise web version of the Alkebuleum v0.4 whitepaper. Download the full PDF for complete details."
                url="https://alkebuleum.org/whitepaper"
                image="https://alkebuleum.org/og/whitepaper.jpg"
                canonical="https://alkebuleum.org/whitepaper"
            />
            <Container maxWidth="lg">
                {/* Header */}
                <Stack spacing={1.25} sx={{ textAlign: "center", mb: { xs: 5, md: 8 } }}>
                    <Chip
                        label="Alkebuleum Whitepaper · v0.4"
                        sx={{
                            mx: "auto",
                            fontWeight: 700,
                            bgcolor: "rgba(203,178,148,0.28)",
                            color: BLUE,
                            border: "1px solid rgba(14,79,110,0.20)",
                        }}
                    />
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            color: BLUE,
                            letterSpacing: "-0.4px",
                            lineHeight: 1.15,
                        }}
                    >
                        The Pan-African Blockchain Protocol
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        © 2022 Alkebuleum · Author: Ernesto Dwehsidi Herbert
                    </Typography>
                </Stack>

                <Grid container spacing={6}>
                    {/* TOC */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Box
                            sx={{
                                position: { md: "sticky" },
                                top: { md: 96 },
                                border: "1px solid rgba(14,79,110,0.12)",
                                borderRadius: 2,
                                p: 2,
                                background: "rgba(255,255,255,0.9)",
                            }}
                        >
                            <Typography variant="overline" sx={{ color: "text.secondary" }}>
                                Contents
                            </Typography>
                            <List dense sx={{ mt: 1 }}>
                                {TOC.map((t) => (
                                    <ListItem key={t.id} sx={{ py: 0.25 }}>
                                        <MLink
                                            href={`#${t.id}`}
                                            underline="hover"
                                            sx={{ color: BLUE, fontSize: 14, fontWeight: 600 }}
                                        >
                                            {t.label}
                                        </MLink>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Grid>

                    {/* Body */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Stack spacing={3.5}>
                            <SectionTitle id="abstract">Abstract</SectionTitle>
                            <P>
                                Africa—home to immense human and natural resources—faces entrenched challenges:
                                poverty, disease, illiteracy, insecurity, and systemic injustice. Persistent failures in governance,
                                corruption, mismanagement, and the absence of accountability have stalled growth. This paper
                                proposes a Smart Pan-African Economy built on Web3, Blockchain, and AI to introduce
                                transparency into governance and economic systems and to minimize corruption and social bias.
                            </P>

                            <Divider sx={{ borderColor: "rgba(14,79,110,0.15)" }} />

                            <SectionTitle id="background">Background</SectionTitle>
                            <P>
                                Alkebuleum is from the word Alkebulan which is believed to be the ancient name of Africa. In Kemetic
                                History of Afrika, Dr. Cheikh Anta Diop writes, “The ancient name of Africa was Alkebulan. Alkebu-lan
                                “mother of mankind” or “garden of Eden”.” Alkebulan is the oldest and the only word of Indigenous
                                origin. It was used by the Moors, Nubians, Numidians, Chart-Haddans (Carthaginians), and Ethiopians.
                                Africa, the current misnomer adopted by everyone today, was given to this continent by the ancient
                                Greeks and Romans.”
                                Africa is the world's second largest and second-most-populous continent. It has the world’s youngest
                                population and hosts a large diversity of ethnicities, cultures, and languages. While the continent
                                accounts for over 16.72% of the world’s population, its share in world trade is tiny and has been
                                declining.
                                In 1991, this percentage was only 2%. If the oil-exporting countries of the continent were to be excluded
                                from the computation, the figure would be reduced to 0.9%. Between 1960 and 1973, Africa’s average
                                annual rate of economic growth was 5.3%. Between 1980 and 1983, the growth rate fell to 0.5% per
                                year. Between 1980 to 1990, world trade grew at an annual rate of 6%. Yet, the exports of sub-Saharan
                                Africa declined by 2.1%. Ghana was on par with South Korea in terms of its gross domestic product
                                (GDP) per capita. This is no longer the case today.
                                African countries were virtually self-sufficient in producing food decades ago; by 1995, however, one
                                out of every four people in Sub-Saharan Africa was homeless and jobless, thus affecting the continent’s
                                agrarian output. Indeed, Sub-Saharan Africa’s agricultural growth rates have declined from an annual
                                average of 2.2% (1965-1973) to 10% (1974-1980), and then to 0.6% (1981-1985). The situation hardly
                                improved in subsequent years. In fact, from 1980-1992, per capita, food production declined
                                considerably leading to an increase in food aid from 1.6 million to 4.2 million tons. Not too long ago in
                                2014, Sub-Saharan Africa’s GDP per capita (at constant 2005 prices) was $1,036.10. At the 1.4-percent
                                growth rate estimated for 2015, it would take Africa 50 years to double GDP per capita.
                                Today, the economic growth of the continent continues to diminish while its dependence on
                                international aid keeps growing. What hope does Africa have for the immediate future? The prospect is
                                very gloomy. Unless there is rapid action, backed by adequate resource allocation, current trends
                                indicate that most African economies are bound for a decade of continuing stagnation, poverty, mass
                                misery, and deprivation.
                            </P>

                            <SectionTitle id="external-causes">External Causes</SectionTitle>
                            <P>
                                The external causes include the traumatic effects of rising oil prices; policies advocated by the World
                                Bank and the IMF; the crushing burden of international debt and interest rates, which forced the
                                restructuring economies to earn foreign exchange only to pay debts and thus compromise genuine
                                development; the lack of adequate capital flow and transfer of technology; high tariff barriers by rich
                                economies, or quotas that protect domestic economic interests from the competition of primary
                                products from the poor countries. Other problems include the production of substitutes and synthetics
                                that compete with natural products; terms and conditions of external aid; the increasing decline in aid;
                                deterioration of the terms of trade (i.e., the amount of a given raw material that they must export to get
                                a manufactured product whose cost keeps on growing); and globalization.
                            </P>

                            <SectionTitle id="internal-causes">Internal Causes</SectionTitle>
                            <P>
                                Internal causes include poor governance, corruption, mismanagement, lack of accountability,
                                inequality, injustice, illiteracy, conflicts, social biases, and much more. Corruption, lack of
                                accountability, and poor governance are so entrenched in most African societies currently, so much so
                                that the people see it as a ‘normal’ and expected behavior. The following is a list of other issues that
                                contribute to the decline in the local economies:
                                Poverty: Although the poverty rate in Africa has dropped in recent years, rapid population growth
                                means that the number of people suffering from poverty keeps growing; from 280 million in 1990 to an
                                estimated 330 million in 2012.
                                Poor Education: More than two out of five African adults cannot read or write.
                                Poor Health: Health outcomes are worse in Africa than anywhere else in the world, even though life
                                expectancy at birth has risen and chronic child malnutrition has declined since the mid-1990s.
                                Violence: The tolerance of domestic violence is twice as high as in the rest of the developing world.
                                Incidents of violence against civilians are on the rise. While this litany of suffering is true throughout
                                sub-Saharan Africa, with regard to all these measures life is particularly harsh for people living in
                                roughly 34% of Africa where states have collapsed to the point of irrelevance.
                                Hunger: Of the 20 countries in the world with the worst food and nutrition security, 19 are in Africa.
                                Sustainable agriculture, nutrition, and food security: Inadequate investment in sustainable
                                agriculture and significant social protection remain the major blocks to enhancing food availability.
                                Climate change has also adversely affected many countries in Africa and compromised their ability to
                                feed their people.

                                Access to financing: About 70 percent of Africans work in agriculture, but only 10% of the total
                                portfolios of commercial banks go to agriculture, according to the World Bank. Challenging legal and
                                financial environments are constraining growth in African agriculture. For smallholders, especially,
                                credit is often inaccessible or not affordable. Without appropriate financing, farmers are not only less
                                able to invest in their operations but also much more vulnerable to market volatility and unpredictable
                                weather.
                            </P>

                            <SectionTitle id="failed-efforts">Efforts That Failed</SectionTitle>
                            <P>
                                Efforts originating from the World Bank, African Development Bank, the IMF, International and local
                                Aid Organizations and Nations, programs, and policy restructuring among others have been and are
                                being made frequently.
                                Regarding the gravity of the continent's situation, the late U.S. President John Kennedy said before
                                the 16th Session of the United Nations (UN) General Assembly that "political sovereignty is but a
                                mockery without the means of meeting poverty, illiteracy and diseases, and that self -determination is
                                but a slogan if the future holds no hope. " In an attempt to reform the system of international
                                economic relations, which holds so many disadvantages to the underdeveloped countries of the
                                world, the leaders of these nations made a series of demands. These included the creation of a
                                capital fund from which they could receive grants or obtain low-interest loans; the establishment of the
                                UN Conference on Trade and Development to help increase their export trade with developed
                                countries, in order to earn more capital for development; the establishment of the International
                                Development Association as an affiliate of the World Bank, to grant soft loans; and the creation of a
                                New International Economic Order, which would replace the existing world economic system with one
                                in which the nations of the developing world would receive higher prices for their commodities and
                                accelerate their development. As a result, the UN General Assembly designated the 1960s the first
                                United Nations Development Decade (1960-1970), at the urging of the developing countries, and
                                convened its first session in Geneva in 1964. The theme of this session was the role of trade in
                                relation to economic development, but the meeting also examined the place of international trade in
                                narrowing the gap between the rich and the poor. While its short-term aim was the adjustment of
                                market forces, its long-term goal was the rationalization of the market itself. This was to be done by
                                way of improving the terms of international trade, and by increasing the flow of aid from the rich
                                nations to the poor nations. To that end, the first UN Development Decade aimed at enabling the
                                less-developed countries to stabilize commodity prices, to sell more of their products at remunerative
                                prices in expanding markets, and to propose to rich countries the extension of most-favored-nation
                                treatment to the poor nations.

                                Moreover, the rich countries were expected to assist the development efforts of the poor by creating
                                conditions for the flow of capital to reach 1% of their gross national products (GNP). This proposed
                                strategy, coupled with supplementary measures in international trade, was intended to significantly
                                improve the conditions of underdeveloped nations and even to narrow the gap between the rich and
                                the poor.
                                With such rectifications, it was hoped that Third World countries would finance their development
                                plans from their earnings and domestic savings, that their national incomes would increase by 5%
                                yearly by 1970, and that they would continue to expand at this annual rate thereafter.8 It was even
                                anticipated that personal living standards could be doubled within twenty-five to thirty years and that
                                by the year 2000, we would be living in a world that would have overcome poverty-i.e., a world
                                without want. Since then, there have been a series of UNCfAD conferences. But the possibilities of
                                redressing historic inequities and of bridging the gap between the rich and the poor have not looked
                                bright thus far. It was observed that the developing countries have achieved the ability to garner
                                votes through sheer numbers but have failed to sway the rich nations to meet their demands.
                                After many years of international efforts, even if largely at the level of abstraction, African countries
                                are still being described as economies in either continued “stagnation” or “regression”. The continent
                                is still encountering a progressive deterioration in its capacity to carry out even basic functions. At
                                this point, the only viable option is for the African youth and its private sector to get more involved in
                                nation-building by embracing a more self-empowered, decentralized solution outside of corrupted
                                centralized Government systems.  A solution that could take advantage of current technological
                                advancement to help build and strengthen the economic transactional systems that will eventually
                                power the future of the Pan-African Global economy. The idea behind this paper was created to
                                introduce the concept and design of such technology which will be built on existing blockchain
                                technology coupled with the Artificial Intelligence (AI) advances of the Metaverse to create a unique
                                Blockchain ecosystem for Africa called “Alkebuleum”.
                            </P>

                            <Divider sx={{ borderColor: "rgba(14,79,110,0.15)" }} />

                            <SectionTitle id="solution">The Blockchain Solution</SectionTitle>
                            <P>
                                As pointed out already, The African continent is plagued with corruption, poor governance,
                                mismanagement, and lack of accountability. This sometimes results in countries losing billions of
                                dollars yearly in tax evasion, excessive spending, and mismanagement of public funds. It is also not
                                uncommon to hear of efforts to eliminate these ills from the African system, with almost guaranteed
                                failure to implement such reforms. It would be naive to assume the alarming failure is solely due to
                                high levels of corruption and nepotism, but one cannot also ignore the importance of accountability
                                and transparency in implementing such projects. This is where blockchain technology could help, with
                                accountability and integrity built into the technology by design.
                                Take, for instance, many other areas of government in Africa are usually paper-based systems,
                                involving many people, and numerous channels for forms to pass through for approval, hence costly,
                                lengthy, and increasing exposure to fraud and loss. With blockchain, transactions are transparent
                                ensuring authenticity and proof of record. Because blockchain smart contracts also enforce the
                                conditions and penalties of transactions automatically, this eliminates the problem of corruption and
                                fraud. Faster transactions also mean better efficiency and reduced costs, saving billions of already
                                strained resources. Another application of the technology is real estate and land property ownership,
                                which is usually not effectively managed by African governments, making land disputes very difficult
                                to deal with and billions lost in unclaimed taxes. Attempting to fix this issue has been largely
                                unsuccessful in the past due to the sector being plagued with corruption and nepotism. Having a
                                system that not only ensures each record of ownership is not only immutable but publicly accessible,
                                solves the corruption problem and also introduces efficiency when potential buyers need to do
                                ownership checks of current and past owners of a property they are interested in purchasing. This is
                                an area that has to be thought through carefully of course, because public access to records might
                                potentially violate data privacy laws in some countries if personal identifiable information like
                                addresses, contact numbers, etc. are not redacted. In addition, with blockchain, land could be held as
                                equity, making bank loans more accessible to more people who would otherwise not be able to meet
                                the strict requirements for secure bank loans.
                                While there are many other ways the technology can solve the majority of the issues Africans are
                                faced with today, it is important to note that almost all the Blockchains that exist today are built and
                                customized for western nations. The mining or validator requirement, the nodes requirement, the
                                education requirements and even the fees and types of allowed transactions might not be very
                                suitable for the African continent. The continent will need a blockchain solution tailored specifically to
                                cater to the issues the continent is faced with. This is why the Alkebuleum blockchain was born.

                            </P>

                            <SectionTitle id="about-alkebuleum">ALKEBULEUM - ( Blockchain tailored for Africa )</SectionTitle>
                            <P>
                                Alkebuleum is a Pan-African blockchain solution tailored for Africa and its diaspora. The project goal
                                is to build a Pan-African smart economy, aimed at empowering and improving the economic situation
                                of the people of Africa.

                                Primary Objective:
                                The primary Objective of the Alkebuleum Blockchain is to Improve the economic situation of the
                                people of Africa and its Diaspora by tackling the major economic barriers which are but not limited to
                                corruption, wasteful spending, inefficiency, antitrust, injustice, lack of human resources etc.  To
                                achieve this, we intend to build a smart economy on top of the technological mix of AI, robotics,
                                machine learning, Blockchain, crypto currency, Dapps, Defi and other related technologies.
                            </P>

                            <SectionTitle id="goals-targets">Goals & Targets</SectionTitle>
                            <P>
                                Who are our target users and what are their needs?  We are targeting the global community of Pan
                                Africans and sympathizers, the youth and people of Africa and its diaspora, including all those who
                                wish to see a prosperous and transparent Africa. In abstract, these people want:

                                Africans be self-sufficient
                                Africans be economically empowered
                                Africans be able to communicate opinions and ideas freely about nation-building and economy
                                Africans be educated with valuable skills
                                Africans benefit from a fair and transparent transactions system and little to no fee
                                Africans earn enough to feed their family
                                Africans get equal Opportunities for Jobs, business, and all other opportunities free of biases
                                Africans get Security
                                Africans to be able to sell their locally made products and be able to compete globally
                                Africans to be able to enjoy and experience all forms of entertainment they desire
                                Africans to love and be loved
                                Africans desire to stay in Africa and not risk their lives to get into Western counties
                                Africans to retain their cultural values amid globalizations
                                Africans to realize the idea of a united Africa with one language and goals
                                Africans to have a governing system free of corruption
                                Africans be able to invest in businesses ideas and gain equity

                                Targets:
                                Our targets are the youths, the private sector, the religious institutions, the government institutions,
                                the large and small businesses, the investors, the new business ideas, the creatives, the artists, the
                                Pan Africanist, the Pan African sympathizers and all the people of Africa and its diaspora.
                                In other terms, we will build a platform for stakeholders of all industries to trade and socialize and
                                support each other. Think of something similar to Alibaba, Amazon, and forever all together in a
                                virtual space where there is a product or service for every need or wants.
                            </P>

                            <Divider sx={{ borderColor: "rgba(14,79,110,0.15)" }} />

                            <SectionTitle id="protocols">Protocols & Consensus</SectionTitle>
                            <P>
                                In the year 2008, a person or group under the pseudonym of Satoshi Nakamoto released a
                                whitepaper establishing the model for a blockchain. In 2009, Nakamoto implemented the first
                                blockchain as the public ledger for transactions made using bitcoin.
                                Few years later In 2014, Ethereum gave birth to Blockchain 2.0 which was referred to as applications
                                beyond currency. Their system introduced computer programs into the blocks, representing financial
                                instruments such as bonds. These become known as smart contracts.
                                Few years later the space saw an influx of many new blockchain startups, many implementing their
                                own customized versions of the blockchain protocol but mostly based on the Bitcoin and Ethereum
                                blueprints. Some of these new innovations have opened new portals to the many opportunities and
                                prospects the technology has to offer.
                                But, just like any other technology, the blockchain technology does come with its own drawbacks.
                                Infact, many of the new startups failed and the ones that held on had to adjust to deal with some of
                                the challenges the technology comes with. The following is three of the major drawbacks the
                                technology is facing today:
                                Scalability: Blockchains are not scalable as compared to their counterpart centralized system. The
                                more decentralized the blockchain network gets the less scalable it becomes. In other words, the
                                more people or nodes join the network, the chances of slowing down is more. However, there have
                                been increasing changes to the way the technology works and new solutions on how to solve
                                scalability issues, including permission networks or using a different architectural blockchain solution
                                such as Corda.
                                Energy consumption: The proof of Work (PoW) algorithm introduced by Nakamoto is associated
                                with high energy consumption. Every time the ledger is updated with a new transaction, the miners
                                need to solve complex computational problems which means spending a huge amount of energy.
                                However, not all blockchain solutions work in the same manner. Other consensus algorithms have
                                solved the problem. For example, permission or private networks do not have these problems as the
                                number of nodes within the network is limited. Also, as there is no need for global consensus, they
                                use efficient consensus methods to reach consensus.
                                Security Issues and Thief:  Since the onset of the technology, there have been many different ways
                                the blockchain network has been compromised. Let’s go through them below one by one to make
                                more sense of it.

                                51% attack: In the 51% attack, if an entity can control 51% or more of the network nodes, then it can
                                result in control of the network. By doing so, they can modify the data in the ledger and also do
                                double-spending. This is possible on networks where the control of miners or nodes are possible.
                                This means that private networks are more likely to be safe from 51% attacks, whereas public ones
                                are more vulnerable to this.
                                Double-spending: Double-spending is yet another problem with the current blockchain technology.
                                To prevent double-spending the blockchain network deploys different consensus algorithms
                                including Proof-of-Stake, Proof-of-Work, and so on. Double spending is only possible on networks
                                with a vulnerability to the 51% attack.
                                DDoS’s attack: In a DDoS attack, the nodes are bombarded with similar requests, congesting the
                                network and bringing it down.
                                Cryptographic cracking: Another way the blockchain technology is not secure is that the
                                cryptographic solution that it utilizes. Quantum algorithms or computing are more than capable of
                                breaking cryptographic cracking. However, blockchain solutions are now implementing quantum
                                proof cryptographic algorithms.

                            </P>

                            <SectionTitle id="constraints">Community Constraints</SectionTitle>
                            <P>
                                Aside from the known drawbacks associated with the current blockchain technology, Alkebuleum’s
                                target community has additional challenges that need to be addressed if the project is to be
                                successful.
                                Lack of Education among Pan African users: the targeted users of the project are mostly people
                                with little or no knowledge about blockchain, cryptocurrency, and related technologies. Most of this
                                project's early efforts will have to focus on educating the user on basic knowledge like setting up a
                                wallet, understanding the concept of the private and public key, understanding the security risk, and
                                how to protect oneself and assets while using the system.
                                Lack of Blockchain Expertise and developers in the Pan African community: Blockchain
                                technology is fairly new and still evolving. Most of its applications are concentrated in western
                                nations while Africa is still trying to get familiar. The Alkebuleum project depends on experienced
                                developers from the pan-African global community to contribute to project code development.
                                Currently, there are only a handful of people in this community that have experience in blockchain
                                technology. This means adequate efforts have to be made to train a lot of new developers in
                                developing and managing blockchain applications.
                                Access to nodes and energy required to participate in the blockchain network: In order for
                                users in the global Pan African community to participate in a blockchain consensus like that of Proof
                                of Work (POW), they will need to purchase expensive nodes and equipment required by such a
                                network.

                                In addition, they will need a stable source of electricity to power these machines.  The reality is, due to
                                the current economic condition of the community, most users would not be able to afford these
                                expensive equipment and would not get access to stable power sources. These are some of the
                                constraints the project will have to consider when deciding the approach to use when considering
                                choosing a consensus.
                            </P>

                            <SectionTitle id="approach">Alkebuleum Approach</SectionTitle>
                            <P>
                                Considering the aforementioned, the following solutions have been developed to mitigate these issues:
                                Different consensus for different stages of operations
                                Massive Education and awareness campaigns
                                User friendly identity: Unique Phone number or email to represent public keys
                                Mobile phone nodes to be used in transaction validation
                                Alkebuleum Consensus
                                The Alkebuleum project will develop and release three different consensus algorithms at three (3)
                                different points in time. The slow but sure strategy will give the project the time and ability to champion
                                the balance between Security, Scalability, Decentralization, and Education. The extent to which either
                                of these is prioritized will hugely affect the success of the project. Prioritizing Decentralization over
                                security or education will leave the young network vulnerable to attack. Prioritizing Scalability over
                                security or education, will leave the network inefficient and also vulnerable to attacks.
                                The best approach should be prioritizing Education and Security in the first few years of operation.
                                The organizations in the Alkebuleum ecosystem, including the Alkebuleum DAO, will have to focus
                                most of their resources and efforts on education and awareness targeted at users and developers in
                                the global Pan-African community. The Alkebuleum protocol, in its first two (2) to three (3) years, will
                                have to prioritize Security over scalability and decentralization. Considering these, the first consensus
                                of the project called Alkebuleum Protocol V1 will be a permissioned network. After the project spends
                                some years educating the masses, training more Pan African blockchain developers, and building the
                                experience of the team and organization supporting the project, it will then be safe enough to shift to a
                                more decentralized and scalable solution. Around the 3rd year of the operation, the project should see
                                the birth of a Proof of Stake consensus algorithm called Alkebuleum Protocol V2 that will prioritize
                                Security, decentralization, scalability and compliance all at the same time. The final protocol called
                                Alkebuleum Protocol V3 will be a fully decentralized Proof of Work consensus. A lot of time, resources
                                and development efforts will have to go into building an environmentally friendly and affordable POW
                                protocol and ecosystem that will operate efficiently for the target user base. This will only be possible
                                with parallel advances in off chain innovations like the renewable energy, affordable mining equipment
                                and other tools and resources which will help make a future POW consensus possible

                            </P>

                            <SectionTitle id="consensus-eras">Consensus Eras: PoRA → PoSR → PoWU</SectionTitle>
                            <Stack component="ul" sx={{ pl: 3, m: 0 }} spacing={1}>
                                <li>
                                    <Typography variant="body1" sx={{ lineHeight: 1.85 }}>
                                        <b>V1 · PoRA (Proof of Reputable Authority)</b> — The first version of the blockchain will be a permissioned blockchain network running on the Proof of
                                        Reputable Authority (PORA) consensus by nodes called reputation nodes managed by reputable
                                        members of Alkebuleum DAO. Reputation tokens will be awarded to users for their contributions
                                        and time dedicated to the Alkebuleum project. For a DAO member to be authorized to validate
                                        transactions on the network, the member will have to apply to the Alkebuleum Foundation, which is
                                        a legal entity, registered as a nonprofit organization under the laws of the United States. The
                                        Alkebuleum Foundation will regularly set the number of reputation tokens required to be accepted
                                        and communicate the same with the community. When a DAO member is accepted the user will be
                                        offered a legal contract position as an authorized validator of transactions on the Alkebuleum
                                        blockchain network.
                                        The PORA protocol will run live for about two to three years, supporting early developed
                                        applications in the ecosystem and allowing time for the target users and potential blockchain
                                        developers to receive the adequate training and awareness required for the early adoption of the
                                        project in the Pan African community. The PORA era will also allow for the complete development
                                        and maturity of the Alkebuleum DAO, the Alkebuleum Foundation, and other organizations within
                                        the ecosystem. It is expected that at the end of the PORA era, the project team would have
                                        completed work on the Alkebuleum V2 protocol (Proof of Stake Reputation) and will have it
                                        commissioned to take over PORA.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={{ lineHeight: 1.85 }}>
                                        <b>V2 · PoSR (Proof of Staked Reputation)</b> — Proof of Stake Reputation (POSR) is the second consensus model for Alkebuleum V2 protocol
                                        which will be commissioned at the end of the PORA era.  It will depend on the staking and
                                        reputation of diverse participants, spread over different geographical locations to keep the network
                                        secure. Unlike the PORA consensus, participants will not be limited to DAO members anymore nor
                                        will participants have to apply to the Alkebuleum Foundation to be eligible to participate. In the
                                        POSR system, the process of choosing validators will be automated and open to anyone on the
                                        internet. In this new system, a participant (a block signer) must have a trackable reputation they
                                        work hard to build over time that they wouldn't want to jeopardize by attempting to cheat the system.

                                        Users will build their reputation by being awarded a Reputation Token (RPU). Any user that holds
                                        at least 10,000 RPU becomes qualified to to be considered to stake and validate transactions.
                                        Validators are grouped by their geographical locations or their countries which are also termed as
                                        validation pools. For every block a random country or pool is chosen to validate the block. Any
                                        qualified validator from the selected country can perform the validation. For a validator to be
                                        qualified, he must have stake his RPU and AKE to validate a transaction. For every round, all
                                        countries will participate but not in a special order (randomly).
                                        When the validation is performed, it is submitted to the reputation node which double verifies the
                                        validation and then the block is added to the chain in that order. As mentioned earlier, the
                                        reputation nodes are run and managed by reputable members of the Alkebuleum DAO who are
                                        employed by the Alkebuleum Foundation.
                                        Wrong Validation: When a validation is verified to be wrong, a user loses the amount of AKE they
                                        Staked and 10000 Reputation Tokens they staked.
                                        Correct Validation: For each correct validation, the validator is awarded 100 RPU token in
                                        addition to transaction fee
                                        What if no validator offers to validate from a selected country: Only countries that validators have
                                        stake their tokens can be part of the random selection. In the event that no validator on the chain
                                        has offered to validate a transaction, the reputation node will validate the transaction.
                                        Types of Alkebuleum nodes: There are 4 different types of nodes - full, light, archive and
                                        reputation. There are also options of different sync strategies which enables faster
                                        synchronization time. Synchronization refers to how quickly it can get the most up-to-date
                                        information on Alkebuleum's state.
                                        Full node: Stores full blockchain data (although this is periodically pruned so a full node does not
                                        store all state data back to genesis). Participates in block validation and verifies all blocks and
                                        states. All states can be derived from a full node (although very old states are reconstructed from
                                        requests made to archive nodes). Serves the network and provides data on request.
                                        Light/Mobile node: Instead of downloading every block, light nodes download block headers.
                                        These headers only contain summary information about the contents of the blocks. Any other
                                        information required by the light node gets requested from a reputation node. The light node can
                                        then independently verify the data they receive against the state roots in the block headers. Light
                                        nodes enable users to participate in the Alkebuleum network without the powerful hardware or
                                        high bandwidth required to run full nodes. Light nodes should be able to run on mobile phones or
                                        embedded devices. The light nodes should participate in consensus (i.e., they should be
                                        validators), and access the Alkebuleum blockchain with the same functionality as a full node.

                                        Archive node: Stores everything kept in the full node and builds an archive of historical states.
                                        Needed if you want to query something like an old account balance. These data represent units of
                                        terabytes which makes archive nodes less attractive for average users but can be handy for
                                        services like block explorers, wallet vendors, and chain analytics. Syncing clients in any mode other
                                        than archive will result in pruned blockchain data. This means, there is no archive of all historical
                                        states, but the full node can build them on demand.
                                        Reputation node: Stores full blockchain data as an Archive node does but is also involved in
                                        consensus. This node verifies every validation performed by full or light node validators and
                                        monitors the network for any foul play. Only reputable and authorized users from core alkebuleum
                                        DAO can have access.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body1" sx={{ lineHeight: 1.85 }}>
                                        <b>V3 · PoWU (Proof of Work of Understanding)</b> — In the next 5 to 10 years specialized and less expensive nodes powered by AI will be developed to
                                        facilitate the smooth operation of a next generation Proof of Work consensus. Innovations in the
                                        renewable energy sector are expected to produce alternative and sustainable sources of energy.
                                        Adaptation, user and developer knowledge of the technology and its use will be at its best height.
                                        The time will be perfect for the birth of Alkebuleum last protocol version “Proof of Unsupervised
                                        Work’. The ability for a machine to perform a task without the intervention of a human is referred to
                                        unsupervised. In this near future, specialized nodes powered with AI will mine transactions on the
                                        network on behalf of their owners. The removal of human interference will add a layer of trust in a
                                        trustless network.
                                    </Typography>
                                </li>
                            </Stack>


                            <SectionTitle id="governance">Governance & DAO</SectionTitle>
                            <P>
                                <b>RPU (Reputation Token)</b>  users contributing to the blockchain’s ecosystem are rewarded with a
                                participation token called Reputation (RPU). These tokens determine the user's level of
                                involvement and contribution to the blockchain community.

                            </P>
                            <P>
                                <b>(Native DAO)</b>
                                Alkebuleum DAO: is a community-run Decentralized Autonomous Organization established
                                with the goal to support and contribute to the Alkebuleum blockchain ecosystem.  The DAO
                                will consist of two main branches: the Alkebuleum community and the Alkebuleum Core. The
                                Alkebuleum community is made of AKE token holders while the Alkebuleum Core is made up
                                of the Alkebuleum Founders, the Alkebuleum Technical team, the Management team, the
                                secretariat, and Advisors.
                                Both branches of the Alkebuleum DAO will work together in the interest of the people of Africa
                                and to also support the vision of the African Union which is “An Integrated, Prosperous and
                                Peaceful Africa, driven by its own citizens and representing a dynamic force in the global
                                arena.”
                                Vision: The vision is to see a more transparent, corruption-free political and economic
                                system in Africa, driven by its own citizens and representing a dynamic force in the global
                                arena.
                                Alkebuleum Foundation: This is a non-profit organization created to serve as treasury and
                                source of funding for the blockchain ecosystem. This organization will make available
                                transparent, frequent financial reports about the project finances.
                            </P>

                            <SectionTitle id="token">Token Details (AKE)</SectionTitle>
                            <P>
                                <b>Alkecoin (AKE)</b> is the native token for transactions, staking, and governance within the
                                Alkebuleum ecosystem. A separate document details tokenomics and distribution.
                            </P>

                            <Divider sx={{ borderColor: "rgba(14,79,110,0.15)" }} />

                            <SectionTitle id="thanks">Thanks & Attribution</SectionTitle>
                            <P>
                                Whitepaper Author: <b>Ernesto Dwehsidi Herbert</b>. © 2022 Alkebuleum.
                            </P>
                            <Divider sx={{ my: 4 }} />

                            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                                <Button href="/AlkebuleumWhitepaper.pdf" target="_blank" download variant="outlined"
                                    startIcon={<DownloadOutlined />}
                                    sx={{
                                        borderColor: BLUE, color: BLUE, borderRadius: 2,
                                        "&:hover": { backgroundColor: "rgba(14,79,110,0.06)", borderColor: BLUE }
                                    }}
                                >
                                    Download PDF
                                </Button>
                                <Button href="/" variant="text" sx={{ color: BLUE, fontWeight: 700 }}>
                                    Back to Home
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
