---
title: "Multi-drug resistant Enterobacter bugandensis species isolated from the International Space Station and comparative genomic analyses with human pathogenic strains"
authors: ["Nitin K Singh", "Daniela Bezdan", "Aleksandra Checinska Sielaff", "Kevin Wheeler", "Christopher E Mason", "Kasthuri Venkateswaran"]
journal: "BMC Microbiology"
date: "2018 Nov 23"
doi: "10.1186/s12866-018-1325-2"
source_url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6251167/"
---

# Multi-drug resistant Enterobacter bugandensis species isolated from the International Space Station and comparative genomic analyses with human pathogenic strains

*BMC Microbiology*, 2018 Nov 23, [doi:10.1186/s12866-018-1325-2](https://doi.org/10.1186/s12866-018-1325-2)

### Nitin K Singh
### Daniela Bezdan
### Aleksandra Checinska Sielaff
### Kevin Wheeler
### Christopher E Mason
### Kasthuri Venkateswaran

## Abstract

### Background

The antimicrobial resistance (AMR) phenotypic properties, multiple drug resistance (MDR) gene profiles, and genes related to potential virulence and pathogenic properties of five _Enterobacter bugandensis_ strains isolated from the International Space Station (ISS) were carried out and compared with genomes of three clinical strains. Whole genome sequences of ISS strains were characterized using the hybrid de novo assembly of Nanopore and Illumina reads. In addition to traditional microbial taxonomic approaches, multilocus sequence typing (MLST) analysis was performed to classify the phylogenetic lineage. Agar diffusion discs assay was performed to test antibiotics susceptibility. The draft genomes after assembly and scaffolding were annotated with the Rapid Annotations using Subsystems Technology and RNAmmer servers for downstream analysis.

### Results

Molecular phylogeny and whole genome analysis of the ISS strains with all publicly available _Enterobacter_ genomes revealed that ISS strains were _E. bugandensis_ and similar to the type strain EB-247T and two clinical isolates (153\_ECLO and MBRL 1077). Comparative genomic analyses of all eight _E. bungandensis_ strains showed, a total of 4733 genes were associated with carbohydrate metabolism (635 genes), amino acid and derivatives (496 genes), protein metabolism (291 genes), cofactors, vitamins, prosthetic groups, pigments (275 genes), membrane transport (247 genes), and RNA metabolism (239 genes). In addition, 112 genes identified in the ISS strains were involved in virulence, disease, and defense. Genes associated with resistance to antibiotics and toxic compounds, including the MDR tripartite system were also identified in the ISS strains. A multiple antibiotic resistance (MAR) locus or MAR operon encoding MarA, MarB, MarC, and MarR, which regulate more than 60 genes, including upregulation of drug efflux systems that have been reported in _Escherichia coli_ K12, was also observed in the ISS strains.

### Conclusion

Given the MDR results for these ISS _Enterobacter_ genomes and increased chance of pathogenicity (PathogenFinder algorithm with > 79% probability), these species pose important health considerations for future missions. Thorough genomic characterization of the strains isolated from ISS can help to understand the pathogenic potential, and inform future missions, but analyzing them in in-vivo systems is required to discern the influence of microgravity on their pathogenicity.

### Electronic supplementary material

The online version of this article (10.1186/s12866-018-1325-2) contains supplementary material, which is available to authorized users.

**Keywords:** _Enterobacter_, International Space Station, Phylogenomic analyses

## Background

_Enterobacter_ species are facultative anaerobic, Gram-stain-negative, and saprophytic microorganisms found in soil, sewage, and as a commensal enteric flora of the human gastrointestinal tract \[[1](#CR1)\]. They have been associated with nosocomial infection in humans, causing bacteremia, endocarditis, septic arthritis, osteomyelitis, skin and soft tissue infections, lower respiratory tract, urinary tract, and intra-abdominal infections \[[2](#CR2), [3](#CR3)\]. Some _Enterobacter_ have also been reported plant pathogens \[[4](#CR4)\]. Antibiotic resistance and its clinical implications have been extensively studied in genus _Enterobacter_, especially _Enterobacter cloacae_, which is resistant to cephalosporins, ampicillin, amoxicillin, and cefoxitin \[[5](#CR5), [6](#CR6)\].

In an ongoing effort of the International Space Station (ISS) Microbial Observatory investigation, the National Aeronautics and Space Administration (NASA) is cataloging the total and viable microbial communities of crew-associated environments using cultivation and molecular techniques of microbial detection \[[7](#CR7), [8](#CR8)\]. As a result, five isolates belonging to the _Enterobacter bugandensis_ group of bacteria from two different locations of the ISS were isolated \[[9](#CR9)\]. Since the initial molecular screening identified these strains as _Enterobacter_ but the identification was not able to resolve their taxonomy to species level, detailed genomic characterizations were warranted in addition to the traditional microbiological characterization. Due to its unstable taxonomic structure, methods utilized for the speciation of _Enterobacter_ varied widely. Commercial biochemical typing systems such as API® 20E \[[10](#CR10)\] or Vitek® 2, and matrix-assisted laser desorption ionization–time of flight mass spectrometry (MALDI-TOF MS) \[[11](#CR11)\] methods have been used, but with limited success. On the basis of 16S rRNA analysis, _Enterobacter_ was structured as a polyphyletic genus and most of the species could not be resolved \[[1](#CR1)\]. Therefore, multilocus sequence typing (MLST) analysis was found to be more appropriate for phylogenetic classification of _Enterobacter_ species \[[12](#CR12)\].

To resolve this question further, whole genome sequencing (WGS) and de novo assembly was performed on all five ISS _E. bugandensis_ strains, creating MLST and genome variation profiles of the ISS strains \[[13](#CR13)\]. Furthermore, comparative genome alignment of the ISS strains with all publicly available 1291 _Enterobacter_ genomes revealed that genomes of these five ISS strains were highly similar to only three clinical _E. bugandensis_ with very high genome similarities and formed a unique ecotype. They are (a) EB-247 strain \[[13](#CR13)\], isolated from neonatal blood of a patient from Tanzania, (b) 153\_ECLO strain \[[14](#CR14)\], isolated from the urine of a neonatal patient strain admitted to the University of Washington Medical Center, Seattle, WA and (c) MBRL 1077 strain, a carbapenemase-producing strain \[[15](#CR15)\] isolated from the wound of a 72-year-old woman with a history of cutaneous scleroderma, medically complicated obesity, and venous insufficiency. In this study, comparative genomic analyses of five ISS strains and three clinical isolates were carried out to elucidate antimicrobial resistance (AMR) phenotypic properties, MDR gene profiles, and genes related to potential virulence and pathogenic potential of the ISS _Enterobacter_ strains.

## Methods

Sample collection from ISS environmental surfaces, processing, cultivation of bacteria were already reported \[[9](#CR9)\]. When 105 bacterial strains isolated from various ISS locations were analyzed for their phylogenetic affiliations, five isolates were identified as _Enterobacter bugandensis_. The five _Enterobacter_ isolates characterized during this study were isolated from two different locations of the ISS flight in March 2015. Four isolates were isolated from the waste and hygiene compartment (WHC), and one strain from the Advanced Resistive Exercise Device (ARED) foot platform of ISS.

### Phenotypic characterization

The isolates were biochemically identified using Vitek®2 Compact gram-negative (GN) cards (bioMerieux, Inc., Hazelwood, MO) \[[16](#CR16)\] and BioLog (Hayward, CA) carbon substrate utilization profile characterization \[[17](#CR17)\]. Sample preparation for MALDI-TOF MS protein analysis was carried out as previously established \[[18](#CR18)\]. MALDI-TOF mass spectra were obtained from an Ultraflex III instrument (Bruker Daltonik, Billerica, MA) operated in linear positive mode under Flex-Control 3.1 software. Mass spectra were processed using Flex Analysis (version 3.1; Bruker Daltonik) and BioTyper software (version 3.1; Bruker Daltonik).

### Genome sequence analysis

Genomic DNA extraction was performed as described previously \[[9](#CR9)\]. WGS was performed on the Oxford Nanopore MinION (Oxford, United Kingdom) and Illumina MiSeq sequencing platform (San Diego, CA). A hybrid approach was utilized for genome assembly using reads from both platforms. Nanopore reads were processed using Poretools \[[19](#CR19)\] toolkit for the purposes of quality control and downstream analysis. Error corrected Nanopore and MiSeq reads were assembled using SPAdes \[[20](#CR20)\]. Scaffolding of the assembled contigs was done using SSpace \[[21](#CR21)\] and gap filling was executed using GapFiller \[[22](#CR22)\]. The draft genomes after assembly and scaffolding were annotated with the help of the Rapid Annotations using Subsystems Technology (RAST) \[[23](#CR23)\] and RNAmmer servers \[[24](#CR24)\] for downstream analysis \[[25](#CR25), [26](#CR26)\] ISS strains assembly characteristics are given in Additional file [1](#MOESM1): Table S1. The 16S rRNA, _gyrB,_ and _rpoB_ gene sequences were retrieved from the WGS and analyzed for their phylogenetic affiliations. The neighbor-joining phylogenetic analysis was performed using the MEGA7 software package \[[27](#CR27)\]. MLST analysis was carried out as described previously \[[28](#CR28)\]. The MLST scheme employed here uses seven house-keeping genes: _dnaA_ (DNA replication initiator), _fusA_ (codes Elongation factor G), _gyrB_ (DNA replication and repair), _leuS_ (Leucine tRNA ligase), _pyrG_ (CTP synthase), _rplB_ (50S ribosomal protein), and _rpoB_ (β subunit of bacterial RNA polymerase) \[[29](#CR29)\]. The retrieved sequences were compared with the sequence types deposited at _E. cloacae_ MLST database \[[30](#CR30)\], concatenated according to the MLST scheme. The genes were analyzed independently, or as a single concatenate using neighbor-joining algorithms.

The SNP-based phylogenetic tree was generated using CSIPhylogeny \[[28](#CR28)\] version 1.4. Using genome sequences of multiple isolates CSIPhylogeny calls SNP, filters the SNPs, performs site validation, and infers a phylogeny based on the concatenated alignment of high-quality SNPs. The analysis included _Enterobacter_ reference whole genome sequences which were downloaded from the NCBI GenBank database. This genome-wide SNP analysis allows for higher resolution phylogenetic analysis compared to other methods, which is necessary for comparing highly similar genomes. All positions containing gaps and missing data were eliminated. A total of 3832 positions in the dataset were used to confer the final tree.

Hybrid-genome-assembly (ONT and Illumina data) of strain IF3SW-P2 was nominated as reference genome of the 5 strains sequenced. The IF3SW-P2 genome was used to realign the Illumina MiSeq reads with reads of other 4 strains using bwa-mem ([http://bio-bwa.sourceforge.net](http://bio-bwa.sourceforge.net/)/). Postprocessing of the BAM files was performed using SAMtools \[[31](#CR31)\] and picard ([https://github.com/broadinstitute/picard](https://github.com/broadinstitute/picard)). GATK HaplotypeCaller ([https://software.broadinstitute.org/gatk/](https://software.broadinstitute.org/gatk/)) was used for SNP and indels identification.

Pairwise average nucleotide index (ANI) was calculated using the algorithm from Goris et al. 2007 \[[32](#CR32)\] and GC content was determined using EzTaxon-e \[[33](#CR33)\]. Digital DNA-DNA hybridization (dDDH) was performed using the Genome-to-Genome Distance Calculator 2.0 (GGDC 2.0) \[[34](#CR34)\]. Briefly, the genome sequences in FASTA format were submitted to GGDC 2.0 along with the sequences in FASTA format for the _Enterobacter_ reference genome that were available: _E. aerogenes_ KCTC 2190, _E. asburiae_ ATCC 35953, _E. bugandensis_ EB-247T, _E. cancerogenus_ ATCC 35316, _E. cloacae_ ATCC 13047, _E. hormaechei_ ATCC 49162, _E. kobei_ DSM 13645, _E. lignolyticus_ SCF1, _E. ludwigii_ EN119, _E. massiliensis_ JC163, _E. mori_ LMG25706, _E. muelleri_ JM-458T, _E. xiangfangensis_ LMG 27195, and _E. soli_ ATCC BAA-2102_._ The results were obtained by comparing query genomes (ISS isolates) with each of the reference genomes to calculate dDDH and intergenomic distances. Global comparison of ISS isolates with other species was done using local BLAST \[[35](#CR35)\]. Genome sequence assemblies were aligned using BLASTN and the diagrammatic view was created using BLAST Ring Image Generator (BRIG) software \[[36](#CR36)\].

### Nucleotide sequence deposition

The WGS data submitted to the National Center for Biotechnology Information (NCBI) GenBank and NASA GenLab databases were downloaded and characterized during this study. The complete genome sequences of all ISS strains were deposited in NCBI under Bioproject PRJNA319366 as well as at the NASA GeneLab system (GLDS-67; [https://genelab-data.ndc.nasa.gov/genelab/accession/GLDS-67/#](https://genelab-data.ndc.nasa.gov/genelab/accession/GLDS-67/)). The GenBank/EMBL/DDBJ accession numbers for the 16S rRNA gene sequence of isolated strains are: IF2SW-B1 ([KY218809](https://www.ncbi.nlm.nih.gov/nuccore/KY218809)), IF2SW-B5 ([KY218813](https://www.ncbi.nlm.nih.gov/nuccore/KY218813)), IF2SW-P2 T ([KY218815](https://www.ncbi.nlm.nih.gov/nuccore/KY218815)), IF2SW-P3 ([KY218816](https://www.ncbi.nlm.nih.gov/nuccore/KY218816)), and IF3SW-P2 ([KY218819](https://www.ncbi.nlm.nih.gov/nuccore/KY218819)).

## Results

### Phenotypic characteristics

The ISS strains showed aerobic, motile, rod shape, Gram stain negative characteristics; colonies were pale yellow in color, formed within 24–36 h at 35 °C on R2A, TSA, and blood agar. Growth was observed at 1–8% NaCl and in pH range 5–7. The Vitek and BioLog systems as well as MALDI-TOF profiles identified the ISS strains as _E. ludwigii._ The MALDI-TOF profile scores for the tested strains were 2.16 _(E. ludwigii_) and 2.10 (_E. asburiae_)_._ In general, no noticeable phenotypic differences were observed among the _Enterobacter_ species tested including _E. bugandensis_ EB_\-_247T, whose genome is closer to ISS strains. As reported earlier, all these five ISS _Enterobacter_ isolates were resistant to cefazolin, cefoxitin, oxacillin, penicillin and rifampin, while for ciprofloxacin and erythromycin, strains were either resistant or intermediate resistant. For gentamycin and tobramycin some strains were resistant, some intermediate resistant, and some susceptible \[[9](#CR9)\].

### Molecular phylogeny

The 16S rRNA gene sequencing of all five isolates placed them within the _Enterobacter_ group and showed maximum similarity (99.6%) with _E. bugandensis_ EB-247T, _E. cancerogenus_ LMG 2693, _E. ludwigii_ EN-119, and _E. mori_ R18–2 (99 to 100%). Since 16S rRNA gene sequencing analysis is insufficient to differentiate _Enterobacter_ species, polygenic and whole genome-based analyses were further attempted. All ISS strains were phylogenetically characterized by the _gyrB_ locus (~ 1.9 kb) and showed that the ISS isolates form a close group with _E. bugandensis_ EB-247T and 153\_ECLO strains (> 99%) while MBRL 1077 isolate was exhibiting 97% similarity with high bootstrap value.

### MLST analysis

The genomic contigs of the ISS isolates were searched for gene sequences of _dnaA, fusA, gyrB. leuS, pyrG, rplB, and rpoB_, which are standardized for the use of MLST analysis and reported for _E. cloacae_ species \[[29](#CR29)\]. The good congruence between the single-gene reconstructions and the concatenate reinforced the stability of the genealogy were observed. The reconstruction was based on the RAxML algorithm \[[37](#CR37)\] and the resulting MLST tree (Fig. [1](#Fig1)) shows that the ISS isolates are phlylogenetically related to _E. bugandensis_ clinical strains (EB-247, strain 153\_ECLO, and isolate MBRL 1077).

### SNP analysis

Even though MLST analysis was clearly able to genomically resolve the ISS isolates to species level and distinguish them from other members of the genus _Enterobacter_, whole genome SNP analysis, SNP tree analysis excluding plasmid sequences, was carried out to validate these results. The snpTree does not ignore any nucleotide positions and is able to consider 100% of the chromosomal genome. All the available WGS of the _Enterobacter_ genus reference genomes from GenBank were used for SNP analysis with snpTree. Of the 22 total nucleotide sequences; 58,121 positions were found in all analyzed genomes and 3832 positions in the dataset were used to confer the final tree (Fig. [2](#Fig2)). The snpTree analyses confirmed and gave a strong validation to the MLST/_gyrB_ data, confirming that all ISS isolates are _E. bugandensis_ but strain MBRL 1077 grouped differently from the members of the _E. bugandensis_ group_._

SNP identification within ISS strains was carried out using GATK HaplotypeCaller. Filtered SNP calls and indels (after removal of false positives) are given in the Additional file [1](#MOESM1): Table S1. Post-filtration analyses showed that there were 9, 12, 15, 13, and 0 SNPs seen in IF2SWB1, IF2SWB5, IF2SWP2, IS2WP3 and IS3SWP2, respectively. Further 6, 0, 4, 6, and 0 indels were seen in IF2SWB1, IF2SWB5, IF2SWP2, IS2WP3 and IS3SWP2, respectively (Additional file [1](#MOESM1): Table S1). A maximum of 15 SNPs was observed among ISS isolates, probably being clonal in origin, with a very recent common ancestor. However, it should be noted that 4 strains were isolated from location #2 (space toilet) and one strain from the exercise platform (ARED).

### ANI values and digital DNA-DNA hybridization

The ANI values for the ISS strains were maximum against _E. bugandensis_ EB-247, 153\_ECLO, and MBRL 1077 strains (> 95%) as were those of MLST analyses, and the ANI values of rest of the _Enterobacter_ genomes tested were < 91% (Table [1](#Tab1)). The digital DNA-DNA hybridization (dDDH) results of the ISS strain showed high similarity with _E. bugandensis_ EB-247 (89.2%), 153\_ECLO (89.4%), and MBRL 1077 (64%) strains whereas dDDH value was < 44.6% to all the other available _Enterobacter_ reference genomes (Table [1](#Tab1)). Based on various molecular analyses attempted during this study all five ISS _Enterobacter_ strains were phenotypically and genotypically identified as _E. bugandensis._

#### Table 1.

Digital DDH and ANI values of ISS strains and comparison with various _Enterobacter_ species

| Bacteria | Strain number | Source | GenBank accession number | ISS _Enterobacter bugandensis_ isolates (_n_ = 5) |
| --- | --- | --- | --- | --- |
| dDDH | ANI (%) |
| --- | --- |
| _E. bugandensis_ | IF2SW-P2 | ISS-WHC | [POUR00000000](https://www.ncbi.nlm.nih.gov/nuccore/POUR00000000) | 100 | 100.00 |
| _E. bugandensis_ | IF2SW-B1 | ISS-WHC | [POUQ00000000](https://www.ncbi.nlm.nih.gov/nuccore/POUQ00000000) | 100 | 99.99 |
| _E. bugandensis_ | IF2SW-B5 | ISS-WHC | [RBVJ00000000](https://www.ncbi.nlm.nih.gov/nuccore/RBVJ00000000) | 100 | 99.99 |
| _E. bugandensis_ | IF2SW-P3 | ISS-WHC | [POUP00000000](https://www.ncbi.nlm.nih.gov/nuccore/POUP00000000) | 100 | 99.99 |
| _E. bugandensis_ | IF3SW-P2 | ISS-AREED | [POUO00000000](https://www.ncbi.nlm.nih.gov/nuccore/POUO00000000) | 100 | 99.99 |
| _E. bugandensis_ | EB-247T | Nosocomial | [FYBI00000000](https://www.ncbi.nlm.nih.gov/nuccore/FYBI00000000) | 89.2 | 98.66 |
| _E. bugandensis_ | 153 ECLO | Nosocomial | [NZ\_JVSD00000000](https://www.ncbi.nlm.nih.gov/nuccore/NZ_JVSD00000000) | 89.4 | 98.73 |
| _E. bugandensis_ | MBRL1077 | Nosocomial | PRJNA310238 | 63.9 | 95.26 |
| _E. aerogenes_ | KCTC 2190 | Nosocomial | [CP002824](https://www.ncbi.nlm.nih.gov/nuccore/CP002824) | 22.7 | 78.74 |
| _E. asburiae_ | ATCC 35953T | Nosocomial | [NZ\_CP011863](https://www.ncbi.nlm.nih.gov/nuccore/NZ_CP011863) | 30.4 | 85.59 |
| _E. cancerogenus_ | ATCC 35316 | Stool | [NZ\_ABWM00000000](https://www.ncbi.nlm.nih.gov/nuccore/NZ_ABWM00000000) | 31.8 | 86.10 |
| _E. cloacae_ | ATCC 13047T | Spinal fluid | [NC\_014121](https://www.ncbi.nlm.nih.gov/nuccore/NC_014121) | 35.4 | 87.91 |
| _E. hormaechei_ | ATCC 49162T | Sputum | [AFHR01000000](https://www.ncbi.nlm.nih.gov/nuccore/AFHR01000000) | 35.4 | 87.82 |
| _E. kobei_ | DSM 13645T | Blood | [NZ\_CP017181](https://www.ncbi.nlm.nih.gov/nuccore/NZ_CP017181) | 42.8 | 90.54 |
| _E. lignolyticus_ | SCF1 | Soil | [CP002272](https://www.ncbi.nlm.nih.gov/nuccore/CP002272) | 23.5 | 79.98 |
| _E. ludwigii_ | EN-119T | Human | [NZ\_CP017279](https://www.ncbi.nlm.nih.gov/nuccore/NZ_CP017279) | 34.4 | 87.57 |
| _E. massiliensis_ | JC163T | Stool | [NZ\_CAEO00000000](https://www.ncbi.nlm.nih.gov/nuccore/NZ_CAEO00000000) | 22.8 | 79.07 |
| _E. mori_ | LMG 25706T | Mulberry | [NZ\_AEXB00000000](https://www.ncbi.nlm.nih.gov/nuccore/NZ_AEXB00000000) | 37.0 | 88.59 |
| _E. muelleri_ | JM-458T | Rhizosphere | [FXLQ00000000](https://www.ncbi.nlm.nih.gov/nuccore/FXLQ00000000) | 44.6 | 90.77 |
| _Xenorhabdus nematophila_ | ATCC 19061T | Intestine | [FN667742](https://www.ncbi.nlm.nih.gov/nuccore/FN667742) | 22.8 | 69.41 |

_dDDH_ digital DNA-DNA hybridization, _ANI_ Average Nucleotide Identity, _WHC_ Waste and Hygiene Compartment, _ARED_ Advanced resistive exercise device (ARED) foot platform

### Functional characteristics

A detailed genome analysis of all five ISS strains and 3 clinical isolates were carried out to understand its genetic makeup. A total of 4733 genes were classified as carbohydrate metabolism (635 genes), amino acid and derivatives (496 genes), protein metabolism (291 genes), cofactors, vitamins, prosthetic groups, pigments (275 genes), membrane transport (247 genes), and RNA metabolism (239 genes) (Fig. [3](#Fig3)). To test antimicrobial resistance at genomic level, the ISS strains were further compared with nosocomial isolates (1291 genomes) having more than 95% ANI identity with the ISS strains, which taxonomically identified them as same species. Genomes of the clinical strains of _E. bugandensis_ 247, 153\_ECLO, and MBRL-1077, whose ANI values were > 95%, were used for the genetic comparison to further broaden the picture.

Features playing a broad role and implemented by the same domain such as Spectinomycin 9-O-adenylyltransferase and Streptomycin 3-O-adenylyltransferase (EC 2.7.7.47) were only present in _E. bugandensis_ 247 due to the probable lack of selective pressure that might have been encountered by the ISS isolates (Table [2](#Tab2)). The predicted arsenic resistance (arsenic resistance protein, ArsH) noticed in _E. bugandensis_ 247 but not in other strains should be phenotypically tested to confirm the resistance properties conferred in strain _E. bugandensis_ 247 and cross checked with the ISS strains for their inability to degrade arsenic. Trace metals detected in ISS potable water samples, but typically below potability requirements, included arsenic, barium, chromium, copper, iron, manganese, molybdenum, nickel, lead, selenium, and zinc. No mercury or cadmium was detected and the arsenic levels varied from nondetectable in water samples to a maximum of 3.8 μg/L \[[38](#CR38)\].

#### Table 2.

Comparative analyses of antimicrobial gene profiles of _E. bungandensis_ isolated from ISS and clinical sources

| AMR genes and its role | AMR genes that are present in the strains that are: |
| --- | --- |
| ISS (n = 5) | 153 ECLO | MBRL 1077 | EB247 |
| --- | --- | --- | --- |
| Cystine ABC transporter, ATP-binding protein | + | + | + | + |
| Cystine ABC transporter, permease protein | + | + | + | + |
| D-cysteine desulfhydrase (EC 4.4.1.15) | + | + | + | + |
| Spectinomycin 9-O-adenylyltransferase |  |  |  | + |
| Streptomycin 3-O-adenylyltransferase (EC 2.7.7.47) |  |  |  | + |
| Arsenate reductase (EC 1.20.4.1) | + | + | + | + |
| Arsenic efflux pump protein | + | + | + | + |
| Arsenic resistance protein ArsH |  |  |  | + |
| Arsenical resistance operon repressor | + | + | + | + |
| Beta-lactamase (EC 3.5.2.6) | + | + | + | + |
| Beta-lactamase class C and other penicillin binding proteins |  |  | + |  |
| Metal-dependent hydrolases of the beta-lactamase superfamily I | + | + | + | + |
| Cation efflux system protein CusA | + | + | + | + |
| Cation efflux system protein CusC precursor |  |  | + | + |
| Cation efflux system protein CusF precursor |  |  | + | + |
| Cobalt-zinc-cadmium resistance protein | + | + | + | + |
| Cobalt-zinc-cadmium resistance protein CzcA | + | + | + | + |
| Cobalt/zinc/cadmium efflux RND transporter, membrane fusion protein, CzcB family |  |  | + | + |
| Copper-sensing two-component system response regulator CusR |  |  | + | + |
| DNA-binding heavy metal response regulator | + | + | + | + |
| Heavy metal sensor histidine kinase |  |  |  | + |
| Probable Co/Zn/Cd efflux system membrane fusion protein | + | + | + | + |
| Zinc transporter ZitB | + | + | + | + |
| Acetyl-coenzyme A carboxyl transferase beta chain (EC 6.4.1.2) | + | + | + | + |
| Amidophosphoribosyltransferase (EC 2.4.2.14) | + | + | + | + |
| Colicin V production protein | + | + | + | + |
| DedA protein | + | + | + | + |
| DedD protein | + | + | + | + |
| Dihydrofolate synthase (EC 6.3.2.12) | + | + | + | + |
| Folylpolyglutamate synthase (EC 6.3.2.17) | + | + | + | + |
| tRNA pseudouridine synthase A (EC 4.2.1.70) | + | + | + | + |
| Blue copper oxidase CueO precursor | + | + | + | + |
| Copper resistance protein C precursor | + | + | + | + |
| Copper resistance protein D | + | + | + | + |
| Copper-translocating P-type ATPase (EC 3.6.3.4) | + | + | + | + |
| Copper homeostasis protein CutE | + | + | + | + |
| Copper homeostasis protein CutF precursor | + | + | + | + |
| Magnesium and cobalt efflux protein CorC | + | + | + | + |
| Membrane protein, suppressor for copper-sensitivity ScsB | + | + | + | + |
| Membrane protein, suppressor for copper-sensitivity ScsD | + | + | + | + |
| Secreted protein, suppressor for copper-sensitivity ScsC | + | + | + | + |
| Suppression of copper sensitivity: putative copper binding protein ScsA | + | + | + | + |
| Fosfomycin resistance protein FosA | + | + | + | + |
| Membrane-bound lysozyme inhibitor of c-type lysozyme | + | + | + | + |
| 16 kDa heat shock protein A | + | + | + | + |
| 16 kDa heat shock protein B | + | + | + | + |
| HTH-type transcriptional regulator YidP | + | + | + | + |
| Mediator of hyperadherence YidE | + | + | + | + |
| Outer membrane lipoprotein YidQ | + | + | + | + |
| Uncharacterized protein YidR | + | + | + | + |
| Mercuric ion reductase (EC 1.16.1.1) |  |  |  | + |
| PF00070 family, FAD-dependent NAD(P)-disulphide oxidoreductase | + | + | + | + |
| Mercuric resistance operon coregulator |  |  |  | + |
| Mercuric resistance operon regulatory protein |  |  |  | + |
| Mercuric transport protein, MerE |  |  |  | + |
| Acriflavin resistance protein | + | + | + | + |
| Macrolide export ATP-binding/permease protein MacB (EC 3.6.3.-) | + | + | + | + |
| Macrolide-specific efflux protein MacA | + | + | + | + |
| Membrane fusion protein of RND family multidrug efflux pump | + | + | + | + |
| Multi antimicrobial extrusion protein (Na(+)/drug antiporter), MATE family of MDR efflux pumps | + | + | + | + |
| Multidrug-efflux transporter, major facilitator superfamily (MFS) (TC 2.A.1) | + | + | + | + |
| Probable transcription regulator protein of MDR efflux pump cluster | + | + | + | + |
| RND efflux system, inner membrane transporter CmeB | + | + | + | + |
| RND efflux system, membrane fusion protein CmeA | + | + | + | + |
| RND efflux system, outer membrane lipoprotein CmeC | + | + |  | + |
| RND efflux system, outer membrane lipoprotein, NodT family | + | + | + | + |
| Transcription repressor of multidrug efflux pump acrAB operon, TetR (AcrR) family | + | + | + | + |
| Type I secretion outer membrane protein, TolC precursor | + | + | + | + |
| Inner membrane component of tripartite multidrug resistance system | + | + | + | + |
| Membrane fusion component of tripartite multidrug resistance system | + | + | + | + |
| Outer membrane component of tripartite multidrug resistance system | + | + | + | + |
| Multiple antibiotic resistance protein MarA | + | + | + | + |
| Multiple antibiotic resistance protein MarB | + | + | + | + |
| Multiple antibiotic resistance protein MarC | + | + | + | + |
| Multiple antibiotic resistance protein MarR | + | + | + | + |
| DNA-directed RNA polymerase beta subunit (EC 2.7.7.6) | + | + | + | + |
| DNA-directed RNA polymerase beta' subunit (EC 2.7.7.6) | + | + | + | + |
| LSU ribosomal protein L20p | + | + | + | + |
| LSU ribosomal protein L35p | + | + | + | + |
| Translation initiation factor 3 | + | + | + | + |
| SSU ribosomal protein S12p (S23e) | + | + | + |  |
| SSU ribosomal protein S7p (S5e) | + | + | + |  |
| Translation elongation factor G | + | + | + |  |
| Translation elongation factor Tu | + | + | + |  |
| L-aspartate oxidase (EC 1.4.3.16) | + | + | + | + |
| Quinolinate phosphoribosyltransferase \[decarboxylating\] (EC 2.4.2.19) | + | + | + | + |
| Quinolinate synthetase (EC 2.5.1.72) | + | + | + | + |
| DNA gyrase subunit A (EC 5.99.1.3) | + | + | + | + |
| DNA gyrase subunit B (EC 5.99.1.3) | + | + | + | + |
| Topoisomerase IV subunit A (EC 5.99.1.-) | + | + | + | + |
| Topoisomerase IV subunit B (EC 5.99.1.-) | + | + | + | + |
| Streptothricin acetyltransferase, Streptomyces lavendulae type | + | + | + | + |
| Multidrug transporter MdtB | + | + | + | + |
| Multidrug transporter MdtC | + | + | + | + |
| Multidrug transporter MdtD | + | + | + | + |
| Probable RND efflux membrane fusion protein | + | + | + | + |
| Response regulator BaeR | + | + | + | + |
| Sensory histidine kinase BaeS | + | + | + | + |
| Conserved uncharacterized protein CreA | + | + | + | + |
| Inner membrane protein CreD | + | + |  |  |
| Two-component response regulator CreB | + | + |  |  |
| Two-component response regulator CreC | + | + |  |  |

### Global comparison of ISS genomes with other **_Enterobacter_** genomes

A visualization program was reported to be invaluable \[[36](#CR36)\] in determining the genotypic differences between closely related prokaryotes. Visualizing a prokaryote genome as a circular image has become a powerful means of displaying informative comparisons of one genome to a number of others. Using BRIG, a global visual comparison of ISS isolates with other _Enterobacter_ WGS from the GenBank Microbial Genomes Resource was carried out. The resulting output of the BRIG analysis \[[36](#CR36)\], a visualization image, showed draft genome assembly information, read coverage, assembly breakpoints, and collapsed repeats. The mapping of unassembled sequencing reads of the ISS genomes against fully annotated _E. cloacae_ central reference sequences is depicted in Fig. [4](#Fig4).

## Discussion

In summary, a comparative phenotypic and genotypic analyses of ISS isolates identified as _E. bugandensis_ were carried out_._ Additional genomic analyses revealed a close genetic relatedness between ISS isolates and nosocomial earth isolates. MLST and whole genome SNP tree placed ISS and nosocomial isolates to a separate clade when phylogenetically aligned with other member of genus _Enterobacter_. A detailed functional and antimicrobial resistance analysis reveals that the ISS isolates have a 79% probability of being a human pathogen and share similar antimicrobial resistance pattern with _E. bugandensis_ EB-247_,_ MBRL-1077 and 153\_ECLO strains, making them relevant for future missions and crew health considerations.

A total of 112 identified genes of the ISS strains were involved in virulence, disease, and defense. Genes associated with resistance to antibiotics and toxic compounds, including the multidrug resistance tripartite system (also known as 3-protein systems) as shown in a polychlorinated biphenyl-degrader, _Burkholderia xenovorans_ LB400 \[[39](#CR39)\], was noticed in the ISS strain. This protein forms the basic structure and plays a crucial role in, the functioning of an efflux pump rendering a microbe drug resistant \[[40](#CR40), [41](#CR41)\]. A multiple antibiotic resistance (MAR) locus or MAR operon was observed in ISS strains, which codes for protein MarA, MarB, MarC, and MarR, and regulate more than 60 genes, including upregulation of drug efflux systems that have been reported in _Escherichia coli_ K12 \[[42](#CR42)–[44](#CR44)\]. Aminoglycoside adenylyltransferases, whose role is spectinomycin 9-O-adenylyltransferases, which confers microbial resistance to the aminoglycosides in _Salmonella enterica,_ was also seen in ISS strains \[[45](#CR45)\]. Similarly, resistance to fluoroquinolones due to a mutation in _gyrA_ gene in _S. enterica_ \[[46](#CR46)\], and fosfomycin resistance due to the presence of FosA protein-coding gene, which catalyzes the addition of glutathione to C1 of the oxirane in _Serratia marcescens_ \[[47](#CR47)\], were observed in ISS strains. Multiple copies of multi-drug resistance (MDR) genes highly homologous to _S. marcescens_, a pathogen, were identified in the ISS _Enterobacter_ genomes, which gives an indication that these strains may be a potential human pathogen. When tested with PathogenFinder \[[48](#CR48)\] algorithm, strain IF2SW-P2T had > 77% probability to be a human pathogen. When compared with _E. cloacae_ ATCC 13047, which is a well-described human pathogen \[[49](#CR49)\], all five ISS strains showed a > 79% probability score.

Astronauts have been taking beta-lactam based medical drugs for approximately two decades, and ß-lactamase (superfamily I \[metal dependent hydrolases\] and E.C.3.5.2.6) was present in all strains under study, while penicillin-binding proteins (PPB4B) were only present in MBRL-1077. Fluoroquinolone resistance due to gyrase and topoisomerase mutation was present in all the strains. Metal-dependent hydrolases, cation efflux system protein CusA, cobalt-zinc-cadmium resistance protein, cobalt-zinc-cadmium resistance protein CzcA, DNA-binding heavy metal response regulator, Co/Zn/Cd efflux system membrane fusion protein, zinc transporter ZitB were found in both ISS isolate and nosocomial organism understudy. These genes principally help in detoxification of periplasm by exporting toxic metal cation outside the cell. Determinants of the metal resistance are usually located on the plasmid and readily acquired from the environment and also complement antibiotic resistance \[[50](#CR50), [51](#CR51)\]. The plasmid encoded putative transcriptional regulators containing the CopG/Arc/MetJ DNA-binding domain and a metal-binding domain were present in the ISS strains (Additional file [2](#MOESM2): Table S2). Further studies are required for phenotypic characterization to confirm this trait. Presence of active beta lactamase gene, efflux pump, and RND (resistance, nodulation and cell division protein family) protein family renders broad-spectrum resistance to ISS isolates from drugs and natural inhibitors.

We have recently observed that competency of bacteria to acquire foreign genetic material increases in microgravity (in preparation) and similar mechanism for metal resistance of ISS strain was also predicted. Antimicrobial and metal resistance is also conferred by RND genes \[[52](#CR52)\], which were present in all the strains under study. Genomic analysis reveals the presence of genes associated with MDR efflux pump, belonging to RND, which are reported to be the major contributors of resistance to antibiotic and other toxic compounds to the bacteria \[[41](#CR41)\]. RND efflux system, inner membrane transporter CmeB, membrane fusion protein CmeA, outer membrane lipoprotein CmeC, outer membrane lipoprotein NodT family were found in all strains. These become important for the future space studies, as MDR has been reported to play role in the physiological function and confer resistance to the substances like bile, hormone and host defense molecule \[[53](#CR53)\], which can make bacteria a dominant persistor and lead to pathogenicity in humans.

## Conclusion

The genomic characterizations showed that the ISS _Enterobacter_ strains might potentially exhibit pathogenicity to human. However, the pathogenicity of the ISS strains compared to clinical strains isolated from patients should be explored in vivo experiments before making any assumption about whether these potential AMR gene markers are due to spaceflight changes or not. Moreover, the transit time and route for the organisms from the ISS may have some small impact on the response or physiological traits of the bacteria. WGS is still an important tool to monitor transmission routes of opportunistic pathogen bacteria \[[25](#CR25), [26](#CR26)\]. To avoid this, future missions could utilize Nanopore sequencing directly in microgravity as well as additional function and taxonomic classification methods \[[26](#CR26), [54](#CR54)\], and then leverage the above detailed analytic steps to gauge relevance for crew health and safety.

## Additional files

## Acknowledgements

Part of the research described in this publication was carried out at the Jet Propulsion Laboratory, California Institute of Technology, under a contract with NASA. We would like to thank astronauts Captain Terry Virts and Commander Jeffrey Williams for collecting samples aboard the ISS, and the Implementation Team at NASA Ames Research Center for coordinating this effort. We would like to thank Stephan Ossowski and Mattia Bosio for their insights into hybrid de-novo assembly, Alexa McIntyre for transferring data/base-calling, and Jason Wood for critically reading the manuscript. We thank Dr. Patricio Jeraldo, Mayo Clinic, Rochester, MN for providing MBRL 1077 strain and Dr. Stephen J. Salipante, Univ. of Washington, Seattle, WA for providing 153\_ECLO strain. © 2018 California Institute of Technology. Government sponsorship acknowledged.

### Funding

This research was funded by a 2012 Space Biology NNH12ZTT001N grant no. 19–12829-26 under Task Order NNN13D111T award to KV, which also funded post-doctoral fellowship for ACS and NKS. We would also like to thank the Epigenomics Core Facility at Weill Cornell Medicine, the Bert L and N Kuggie Vallee Foundation, the WorldQuant Foundation, NASA (NNX14AH50G, NNX17AB26G), the National Institutes of Health (R01ES021006, 1R21AI129851), the Bill and Melinda Gates Foundation (OPP1151054), and the Alfred P. Sloan Foundation (G-2015-13964). The funding bodies had no role in designing the study, sample collection, analysis, and interpretation of data or in writing the manuscript.

### Availability of data and materials

The genome sequences used in the current study are available on the NCBI Genome Database under the accession numbers listed in Table [1](#Tab1). Detailed function(s) of all the AMR genes associated with 5 ISS strains mentioned in Additional file [3](#MOESM3): Table S3.

## Abbreviation

AMR

Antimicrobial resistance

ANI

Average nucleotide index

ARED

Advanced Resistive Exercise Device

dDDH

Digital DNA-DNA hybridization

GGDC

Genome-to-Genome Distance Calculator

GN

Gram-negative

ISS

International Space Station

MALDI-TOF MS

Matrix-assisted laser desorption ionization–time of flight mass spectrometry

MAR

Multiple antibiotic resistance

MDR

Multiple drug resistance

MLST

Multilocus sequence typing

NASA

National Aeronautics and Space Administration

NCBI

National Center for Biotechnology Information

WGS

Whole genome sequencing

WHC

Waste and hygiene compartment

## Authors’ contributions

Conceived and designed the experiments: KV. Performed the experiments: NKS, DB, ACS and KW. Analyzed the data: NKS. CM structured and designed verification pipeline for carrying out sequencing, analysis of the de novo assemblies, including contig alignment, genome completion, and annotation checks. KW carried out the phenotypic assays of the antibiotic assays, Vitek-2 based biochemical characterization, and hemolytic characterization of the strains studied. Contributed reagents/materials/analysis tools and acquired funding: KV, CM. Wrote the paper: NKS, ACS, DB, CM, and KV. All authors read and approved the final manuscript.

### Ethics approval and consent to participate

No formal ethics approval was required in this particular study.

### Consent for publication

Not applicable.

### Competing interests

The authors declare that they have no competing interests

### Publisher’s Note

Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.

## Contributor Information

Nitin K. Singh, Email: nitin.k.singh@jpl.nasa.gov

Daniela Bezdan, Email: dab2074@med.cornell.edu.

Aleksandra Checinska Sielaff, Email: checinskasielaff@wsu.edu.

Kevin Wheeler, Email: Kwheeler@allosource.org.

Christopher E. Mason, Email: chm2042@med.cornell.edu

Kasthuri Venkateswaran, Phone: (818) 393-1481, Email: kjvenkat@jpl.nasa.gov.

## References

*   1.Mezzatesta ML, Gona F, Stefani S. Enterobacter cloacae complex: clinical impact and emerging antibiotic resistance. Future Microbiol. 2012;7(7):887–902. doi: 10.2217/fmb.12.61. \[[DOI](https://doi.org/10.2217/fmb.12.61)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/22827309/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Future%20Microbiol&title=Enterobacter%20cloacae%20complex:%20clinical%20impact%20and%20emerging%20antibiotic%20resistance&author=ML%20Mezzatesta&author=F%20Gona&author=S%20Stefani&volume=7&issue=7&publication_year=2012&pages=887-902&pmid=22827309&doi=10.2217/fmb.12.61&)\]
*   2.Chow JW, Fine MJ, Shlaes DM, Quinn JP, Hooper DC, Johnson MP, Ramphal R, Wagener MM, Miyashiro DK, Yu VL. Enterobacter bacteremia: clinical features and emergence of antibiotic resistance during therapy. Ann Intern Med. 1991;115(8):585–590. doi: 10.7326/0003-4819-115-8-585. \[[DOI](https://doi.org/10.7326/0003-4819-115-8-585)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/1892329/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Ann%20Intern%20Med&title=Enterobacter%20bacteremia:%20clinical%20features%20and%20emergence%20of%20antibiotic%20resistance%20during%20therapy&author=JW%20Chow&author=MJ%20Fine&author=DM%20Shlaes&author=JP%20Quinn&author=DC%20Hooper&volume=115&issue=8&publication_year=1991&pages=585-590&pmid=1892329&doi=10.7326/0003-4819-115-8-585&)\]
*   3.Davin-Regli A, Pages JM. Enterobacter aerogenes and Enterobacter cloacae; versatile bacterial pathogens confronting antibiotic treatment. Front Microbiol. 2015;6:392. doi: 10.3389/fmicb.2015.00392. \[[DOI](https://doi.org/10.3389/fmicb.2015.00392)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC4435039/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/26042091/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Front%20Microbiol&title=Enterobacter%20aerogenes%20and%20Enterobacter%20cloacae;%20versatile%20bacterial%20pathogens%20confronting%20antibiotic%20treatment&author=A%20Davin-Regli&author=JM%20Pages&volume=6&publication_year=2015&pages=392&pmid=26042091&doi=10.3389/fmicb.2015.00392&)\]
*   4.Chung YR, Brenner DJ, Steigerwalt AG, Kim BS, Kim HT, Cho KY. Enterobacter pyrinus sp. nov., an organism associated with Brown leaf spot disease of pear trees. Int J Syst Evol Microbiol. 1993;43(1):157–161. \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Int%20J%20Syst%20Evol%20Microbiol&title=Enterobacter%20pyrinus%20sp.%20nov.,%20an%20organism%20associated%20with%20Brown%20leaf%20spot%20disease%20of%20pear%20trees&author=YR%20Chung&author=DJ%20Brenner&author=AG%20Steigerwalt&author=BS%20Kim&author=HT%20Kim&volume=43&issue=1&publication_year=1993&pages=157-161&)\]
*   5.Pages JM, James CE, Winterhalter M. The porin and the permeating antibiotic: a selective diffusion barrier in gram-negative bacteria. Nat Rev Microbiol. 2008;6(12):893–903. doi: 10.1038/nrmicro1994. \[[DOI](https://doi.org/10.1038/nrmicro1994)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/18997824/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Nat%20Rev%20Microbiol&title=The%20porin%20and%20the%20permeating%20antibiotic:%20a%20selective%20diffusion%20barrier%20in%20gram-negative%20bacteria&author=JM%20Pages&author=CE%20James&author=M%20Winterhalter&volume=6&issue=12&publication_year=2008&pages=893-903&pmid=18997824&doi=10.1038/nrmicro1994&)\]
*   6.Tang HJ, Hsieh CF, Chang PC, Chen JJ, Lin YH, Lai CC, Chao CM, Chuang YC. Clinical significance of community- and healthcare-acquired carbapenem-resistant Enterobacteriaceae isolates. PLoS One. 2016;11(3):e0151897. doi: 10.1371/journal.pone.0151897. \[[DOI](https://doi.org/10.1371/journal.pone.0151897)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC4801408/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/26999356/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=PLoS%20One&title=Clinical%20significance%20of%20community-%20and%20healthcare-acquired%20carbapenem-resistant%20Enterobacteriaceae%20isolates&author=HJ%20Tang&author=CF%20Hsieh&author=PC%20Chang&author=JJ%20Chen&author=YH%20Lin&volume=11&issue=3&publication_year=2016&pages=e0151897&pmid=26999356&doi=10.1371/journal.pone.0151897&)\]
*   7.Checinska A, Probst AJ, Vaishampayan P, White JR, Kumar D, Stepanov VG, Fox GE, Nilsson HR, Pierson DL, Perry J, et al. Microbiomes of the dust particles collected from the international Space Station and spacecraft assembly facilities. Microbiome. 2015;3(1). \[[DOI](https://doi.org/10.1186/s40168-015-0116-3)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC4624184/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/26502721/)\]
*   8.Venkateswaran K, Vaishampayan P, Cisneros J, Pierson DL, Rogers SO, Perry J. International Space Station environmental microbiome - microbial inventories of ISS filter debris. Appl Microbiol Biotechnol. 2014;98(14):6453–6466. doi: 10.1007/s00253-014-5650-6. \[[DOI](https://doi.org/10.1007/s00253-014-5650-6)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/24695826/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Appl%20Microbiol%20Biotechnol&title=International%20Space%20Station%20environmental%20microbiome%20-%20microbial%20inventories%20of%20ISS%20filter%20debris&author=K%20Venkateswaran&author=P%20Vaishampayan&author=J%20Cisneros&author=DL%20Pierson&author=SO%20Rogers&volume=98&issue=14&publication_year=2014&pages=6453-6466&pmid=24695826&doi=10.1007/s00253-014-5650-6&)\]
*   9.Urbaniak C, Sielaff AC, Frey KG, Allen JE, Singh N, Jaing C, Wheeler K, Venkateswaran K. Detection of antimicrobial resistance genes associated with the international Space Station environmental surfaces. Nat Sci Rep. 2018;8(1):814. doi: 10.1038/s41598-017-18506-4. \[[DOI](https://doi.org/10.1038/s41598-017-18506-4)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC5770469/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/29339831/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Nat%20Sci%20Rep&title=Detection%20of%20antimicrobial%20resistance%20genes%20associated%20with%20the%20international%20Space%20Station%20environmental%20surfaces&author=C%20Urbaniak&author=AC%20Sielaff&author=KG%20Frey&author=JE%20Allen&author=N%20Singh&volume=8&issue=1&publication_year=2018&pages=814&pmid=29339831&doi=10.1038/s41598-017-18506-4&)\]
*   10.Akbari M, Bakhshi B, Najar Peerayeh S. Particular distribution of Enterobacter cloacae strains isolated from urinary tract infection within clonal complexes. Iran Biomed J. 2016;20(1):49–55. doi: 10.7508/ibj.2016.01.007. \[[DOI](https://doi.org/10.7508/ibj.2016.01.007)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC4686808/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/26498349/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Iran%20Biomed%20J&title=Particular%20distribution%20of%20Enterobacter%20cloacae%20strains%20isolated%20from%20urinary%20tract%20infection%20within%20clonal%20complexes&author=M%20Akbari&author=B%20Bakhshi&author=S%20Najar%20Peerayeh&volume=20&issue=1&publication_year=2016&pages=49-55&pmid=26498349&doi=10.7508/ibj.2016.01.007&)\]
*   11.Khennouchi NCH, Loucif L, Boutefnouchet N, Allag H, Rolain J-M. MALDI-TOF MS as a tool to detect a nosocomial outbreak of extended-Spectrum-β-lactamase- and ArmA methyltransferase-producing Enterobacter cloacae clinical isolates in Algeria. Antimicrob Agents Chemother. 2015;59(10):6477–6483. doi: 10.1128/AAC.00615-15. \[[DOI](https://doi.org/10.1128/AAC.00615-15)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC4576089/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/26239991/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Antimicrob%20Agents%20Chemother&title=MALDI-TOF%20MS%20as%20a%20tool%20to%20detect%20a%20nosocomial%20outbreak%20of%20extended-Spectrum-%CE%B2-lactamase-%20and%20ArmA%20methyltransferase-producing%20Enterobacter%20cloacae%20clinical%20isolates%20in%20Algeria&author=NCH%20Khennouchi&author=L%20Loucif&author=N%20Boutefnouchet&author=H%20Allag&author=J-M%20Rolain&volume=59&issue=10&publication_year=2015&pages=6477-6483&pmid=26239991&doi=10.1128/AAC.00615-15&)\]
*   12.Brady C, Cleenwerck I, Venter S, Coutinho T, De Vos P. Taxonomic evaluation of the genus Enterobacter based on multilocus sequence analysis (MLSA): proposal to reclassify E. nimipressuralis and E. amnigenus into Lelliottia gen. nov. as Lelliottia nimipressuralis comb. nov. and Lelliottia amnigena comb. nov., respectively, E. gergoviae and E. pyrinus into Pluralibacter gen. nov. as Pluralibacter gergoviae comb. nov. and Pluralibacter pyrinus comb. nov., respectively, E. cowanii, E. radicincitans, E. oryzae and E. arachidis into Kosakonia gen. nov. as Kosakonia cowanii comb. nov., Kosakonia radicincitans comb. nov., Kosakonia oryzae comb. nov. and Kosakonia arachidis comb. nov., respectively, and E. turicensis, E. helveticus and E. pulveris into Cronobacter as Cronobacter zurichensis nom. nov., Cronobacter helveticus comb. nov. and Cronobacter pulveris comb. nov., respectively, and emended description of the genera Enterobacter and Cronobacter. Syst Appl Microbiol. 2013;36(5):309–319. doi: 10.1016/j.syapm.2013.03.005. \[[DOI](https://doi.org/10.1016/j.syapm.2013.03.005)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/23632228/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Syst%20Appl%20Microbiol&title=Taxonomic%20evaluation%20of%20the%20genus%20Enterobacter%20based%20on%20multilocus%20sequence%20analysis%20\(MLSA\):%20proposal%20to%20reclassify%20E.%20nimipressuralis%20and%20E.%20amnigenus%20into%20Lelliottia%20gen.%20nov.%20as%20Lelliottia%20nimipressuralis%20comb.%20nov.%20and%20Lelliottia%20amnigena%20comb.%20nov.,%20respectively,%20E.%20gergoviae%20and%20E.%20pyrinus%20into%20Pluralibacter%20gen.%20nov.%20as%20Pluralibacter%20gergoviae%20comb.%20nov.%20and%20Pluralibacter%20pyrinus%20comb.%20nov.,%20respectively,%20E.%20cowanii,%20E.%20radicincitans,%20E.%20oryzae%20and%20E.%20arachidis%20into%20Kosakonia%20gen.%20nov.%20as%20Kosakonia%20cowanii%20comb.%20nov.,%20Kosakonia%20radicincitans%20comb.%20nov.,%20Kosakonia%20oryzae%20comb.%20nov.%20and%20Kosakonia%20arachidis%20comb.%20nov.,%20respectively,%20and%20E.%20turicensis,%20E.%20helveticus%20and%20E.%20pulveris%20into%20Cronobacter%20as%20Cronobacter%20zurichensis%20nom.%20nov.,%20Cronobacter%20helveticus%20comb.%20nov.%20and%20Cronobacter%20pulveris%20comb.%20nov.,%20respectively,%20and%20emended%20description%20of%20the%20genera%20Enterobacter%20and%20Cronobacter&author=C%20Brady&author=I%20Cleenwerck&author=S%20Venter&author=T%20Coutinho&author=P%20De%20Vos&volume=36&issue=5&publication_year=2013&pages=309-319&pmid=23632228&doi=10.1016/j.syapm.2013.03.005&)\]
*   13.Doijad S, Imirzalioglu C, Yao Y, Pati NB, Falgenhauer L, Hain T, Foesel BU, Abt B, Overmann J, Mirambo MM, et al. Enterobacter bugandensis sp. nov, isolated from neonatal blood. Int J Syst Evol Microbiol. 2016;66(2):968–974. doi: 10.1099/ijsem.0.000821. \[[DOI](https://doi.org/10.1099/ijsem.0.000821)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/26637818/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Int%20J%20Syst%20Evol%20Microbiol&title=Enterobacter%20bugandensis%20sp.%20nov,%20isolated%20from%20neonatal%20blood&author=S%20Doijad&author=C%20Imirzalioglu&author=Y%20Yao&author=NB%20Pati&author=L%20Falgenhauer&volume=66&issue=2&publication_year=2016&pages=968-974&pmid=26637818&doi=10.1099/ijsem.0.000821&)\]
*   14.Roach DJ, Burton JN, Lee C, Stackhouse B, Butler-Wu SM, Cookson BT, Shendure J, Salipante SJ. A year of infection in the intensive care unit: prospective whole genome sequencing of bacterial clinical isolates reveals cryptic transmissions and novel microbiota. PLoS Genet. 2015;11(7):e1005413. doi: 10.1371/journal.pgen.1005413. \[[DOI](https://doi.org/10.1371/journal.pgen.1005413)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC4521703/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/26230489/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=PLoS%20Genet&title=A%20year%20of%20infection%20in%20the%20intensive%20care%20unit:%20prospective%20whole%20genome%20sequencing%20of%20bacterial%20clinical%20isolates%20reveals%20cryptic%20transmissions%20and%20novel%20microbiota&author=DJ%20Roach&author=JN%20Burton&author=C%20Lee&author=B%20Stackhouse&author=SM%20Butler-Wu&volume=11&issue=7&publication_year=2015&pages=e1005413&pmid=26230489&doi=10.1371/journal.pgen.1005413&)\]
*   15.Norgan AP, Freese JM, Tuin PM, Cunningham SA, Jeraldo PR, Patel R. Carbapenem- and Colistin-resistant Enterobacter cloacae from Delta, Colorado, in 2015. Antimicrob Agents Chemother. 2016;60(5):3141–3144. doi: 10.1128/AAC.03055-15. \[[DOI](https://doi.org/10.1128/AAC.03055-15)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC4862446/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/26883705/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Antimicrob%20Agents%20Chemother&title=Carbapenem-%20and%20Colistin-resistant%20Enterobacter%20cloacae%20from%20Delta,%20Colorado,%20in%202015&author=AP%20Norgan&author=JM%20Freese&author=PM%20Tuin&author=SA%20Cunningham&author=PR%20Jeraldo&volume=60&issue=5&publication_year=2016&pages=3141-3144&pmid=26883705&doi=10.1128/AAC.03055-15&)\]
*   16.Funke G, Monnet D, de Bernardis C, von Graevenitz A, Freney J. Evaluation of the VITEK 2 system for rapid identification of medically relevant gram-negative rods. J Clin Microbiol. 1998;36(7):1948–1952. doi: 10.1128/jcm.36.7.1948-1952.1998. \[[DOI](https://doi.org/10.1128/jcm.36.7.1948-1952.1998)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC104958/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/9650942/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=J%20Clin%20Microbiol&title=Evaluation%20of%20the%20VITEK%202%20system%20for%20rapid%20identification%20of%20medically%20relevant%20gram-negative%20rods&author=G%20Funke&author=D%20Monnet&author=C%20de%20Bernardis&author=A%20von%20Graevenitz&author=J%20Freney&volume=36&issue=7&publication_year=1998&pages=1948-1952&pmid=9650942&doi=10.1128/jcm.36.7.1948-1952.1998&)\]
*   17.Wragg P, Randall L, Whatmore AM. Comparison of Biolog GEN III MicroStation semi-automated bacterial identification system with matrix-assisted laser desorption ionization-time of flight mass spectrometry and 16S ribosomal RNA gene sequencing for the identification of bacteria of veterinary interest. J Microbiol Meth. 2014;105:16–21. doi: 10.1016/j.mimet.2014.07.003. \[[DOI](https://doi.org/10.1016/j.mimet.2014.07.003)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/25014253/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=J%20Microbiol%20Meth&title=Comparison%20of%20Biolog%20GEN%20III%20MicroStation%20semi-automated%20bacterial%20identification%20system%20with%20matrix-assisted%20laser%20desorption%20ionization-time%20of%20flight%20mass%20spectrometry%20and%2016S%20ribosomal%20RNA%20gene%20sequencing%20for%20the%20identification%20of%20bacteria%20of%20veterinary%20interest&author=P%20Wragg&author=L%20Randall&author=AM%20Whatmore&volume=105&publication_year=2014&pages=16-21&pmid=25014253&doi=10.1016/j.mimet.2014.07.003&)\]
*   18.Schumann P, Maier T. Chapter 13 - MALDI-TOF mass spectrometry applied to classification and identification of Bacteria. In: Michael Goodfellow IS, Jongsik C, editors. Methods in Microbiology, vol. 41: Academic Press; 2014. p. 275–306.
*   19.Loman NJ, Quinlan AR. Poretools: a toolkit for analyzing nanopore sequence data. Bioinformatics. 2014;30(23):3399–3401. doi: 10.1093/bioinformatics/btu555. \[[DOI](https://doi.org/10.1093/bioinformatics/btu555)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC4296151/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/25143291/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Bioinformatics&title=Poretools:%20a%20toolkit%20for%20analyzing%20nanopore%20sequence%20data&author=NJ%20Loman&author=AR%20Quinlan&volume=30&issue=23&publication_year=2014&pages=3399-3401&pmid=25143291&doi=10.1093/bioinformatics/btu555&)\]
*   20.Bankevich A, Nurk S, Antipov D, Gurevich AA, Dvorkin M, Kulikov AS, Lesin VM, Nikolenko SI, Pham S, Prjibelski AD, et al. SPAdes: a new genome assembly algorithm and its applications to single-cell sequencing. J Comput Biol. 2012;19(5):455–477. doi: 10.1089/cmb.2012.0021. \[[DOI](https://doi.org/10.1089/cmb.2012.0021)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC3342519/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/22506599/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=J%20Comput%20Biol&title=SPAdes:%20a%20new%20genome%20assembly%20algorithm%20and%20its%20applications%20to%20single-cell%20sequencing&author=A%20Bankevich&author=S%20Nurk&author=D%20Antipov&author=AA%20Gurevich&author=M%20Dvorkin&volume=19&issue=5&publication_year=2012&pages=455-477&pmid=22506599&doi=10.1089/cmb.2012.0021&)\]
*   21.Boetzer M, Henkel CV, Jansen HJ, Butler D, Pirovano W. Scaffolding pre-assembled contigs using SSPACE. Bioinformatics. 2011;27(4):578–579. doi: 10.1093/bioinformatics/btq683. \[[DOI](https://doi.org/10.1093/bioinformatics/btq683)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/21149342/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Bioinformatics&title=Scaffolding%20pre-assembled%20contigs%20using%20SSPACE&author=M%20Boetzer&author=CV%20Henkel&author=HJ%20Jansen&author=D%20Butler&author=W%20Pirovano&volume=27&issue=4&publication_year=2011&pages=578-579&pmid=21149342&doi=10.1093/bioinformatics/btq683&)\]
*   22.Nadalin F, Vezzi F, Policriti A. GapFiller: a de novo assembly approach to fill the gap within paired reads. BMC Bioinformatics. 2012;13(14):S8. doi: 10.1186/1471-2105-13-S14-S8. \[[DOI](https://doi.org/10.1186/1471-2105-13-S14-S8)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC3439727/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/23095524/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=BMC%20Bioinformatics&title=GapFiller:%20a%20de%20novo%20assembly%20approach%20to%20fill%20the%20gap%20within%20paired%20reads&author=F%20Nadalin&author=F%20Vezzi&author=A%20Policriti&volume=13&issue=14&publication_year=2012&pages=S8&pmid=23095524&doi=10.1186/1471-2105-13-S14-S8&)\]
*   23.Aziz RK, Bartels D, Best AA, DeJongh M, Disz T, Edwards RA, Formsma K, Gerdes S, Glass EM, Kubal M, et al. The RAST server: rapid annotations using subsystems technology. BMC Genomics. 2008;9:75. doi: 10.1186/1471-2164-9-75. \[[DOI](https://doi.org/10.1186/1471-2164-9-75)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC2265698/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/18261238/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=BMC%20Genomics&title=The%20RAST%20server:%20rapid%20annotations%20using%20subsystems%20technology&author=RK%20Aziz&author=D%20Bartels&author=AA%20Best&author=M%20DeJongh&author=T%20Disz&volume=9&publication_year=2008&pages=75&pmid=18261238&doi=10.1186/1471-2164-9-75&)\]
*   24.Lagesen Karin, Hallin Peter, Rødland Einar Andreas, Stærfeldt Hans-Henrik, Rognes Torbjørn, Ussery David W. RNAmmer: consistent and rapid annotation of ribosomal RNA genes. Nucleic Acids Research. 2007;35(9):3100–3108. doi: 10.1093/nar/gkm160. \[[DOI](https://doi.org/10.1093/nar/gkm160)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC1888812/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/17452365/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Nucleic%20Acids%20Research&title=RNAmmer:%20consistent%20and%20rapid%20annotation%20of%20ribosomal%20RNA%20genes&author=Karin%20Lagesen&author=Peter%20Hallin&author=Einar%20Andreas%20R%C3%B8dland&author=Hans-Henrik%20St%C3%A6rfeldt&author=Torbj%C3%B8rn%20Rognes&volume=35&issue=9&publication_year=2007&pages=3100-3108&pmid=17452365&doi=10.1093/nar/gkm160&)\]
*   25.Castro-Wallace SL, Chiu CY, John KK, Stahl SE, Rubins KH, McIntyre ABR, Dworkin JP, Lupisella ML, Smith DJ, Botkin DJ et al: Nanopore DNA sequencing and genome assembly on the international Space Station. bioRxiv 2016. \[[DOI](https://doi.org/10.1038/s41598-017-18364-0)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC5740133/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/29269933/)\]
*   26.McIntyre ABR, Alexander N, Burton AS, Castro-Wallace S, Chiu CY, John KK, Stahl SE, Li S, Mason CE: Nanopore detection of bacterial DNA base modifications. bioRxiv 2017.
*   27.Kumar S, Stecher G, Tamura K. MEGA7: molecular evolutionary genetics analysis version 7.0 for bigger datasets. Mol Biol Evol. 2016;33(7):1870–1874. doi: 10.1093/molbev/msw054. \[[DOI](https://doi.org/10.1093/molbev/msw054)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC8210823/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/27004904/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Mol%20Biol%20Evol&title=MEGA7:%20molecular%20evolutionary%20genetics%20analysis%20version%207.0%20for%20bigger%20datasets&author=S%20Kumar&author=G%20Stecher&author=K%20Tamura&volume=33&issue=7&publication_year=2016&pages=1870-1874&pmid=27004904&doi=10.1093/molbev/msw054&)\]
*   28.Larsen MV, Cosentino S, Rasmussen S, Friis C, Hasman H, Marvig RL, Jelsbak L, Sicheritz-Ponten T, Ussery DW, Aarestrup FM, et al. Multilocus sequence typing of total-genome-sequenced bacteria. J Clin Microbiol. 2012;50(4):1355–1361. doi: 10.1128/JCM.06094-11. \[[DOI](https://doi.org/10.1128/JCM.06094-11)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC3318499/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/22238442/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=J%20Clin%20Microbiol&title=Multilocus%20sequence%20typing%20of%20total-genome-sequenced%20bacteria&author=MV%20Larsen&author=S%20Cosentino&author=S%20Rasmussen&author=C%20Friis&author=H%20Hasman&volume=50&issue=4&publication_year=2012&pages=1355-1361&pmid=22238442&doi=10.1128/JCM.06094-11&)\]
*   29.Miyoshi-Akiyama T, Hayakawa K, Ohmagari N, Shimojima M, Kirikae T. Multilocus sequence typing (MLST) for characterization of Enterobacter cloacae. PLoS One. 2013;8(6):e66358. doi: 10.1371/journal.pone.0066358. \[[DOI](https://doi.org/10.1371/journal.pone.0066358)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC3679064/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/23776664/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=PLoS%20One&title=Multilocus%20sequence%20typing%20\(MLST\)%20for%20characterization%20of%20Enterobacter%20cloacae&author=T%20Miyoshi-Akiyama&author=K%20Hayakawa&author=N%20Ohmagari&author=M%20Shimojima&author=T%20Kirikae&volume=8&issue=6&publication_year=2013&pages=e66358&pmid=23776664&doi=10.1371/journal.pone.0066358&)\]
*   30.Jolley KA, Maiden MC. BIGSdb: scalable analysis of bacterial genome variation at the population level. BMC Bioinformatics. 2010;11(1):595. doi: 10.1186/1471-2105-11-595. \[[DOI](https://doi.org/10.1186/1471-2105-11-595)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC3004885/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/21143983/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=BMC%20Bioinformatics&title=BIGSdb:%20scalable%20analysis%20of%20bacterial%20genome%20variation%20at%20the%20population%20level&author=KA%20Jolley&author=MC%20Maiden&volume=11&issue=1&publication_year=2010&pages=595&pmid=21143983&doi=10.1186/1471-2105-11-595&)\]
*   31.Li H, Handsaker B, Wysoker A, Fennell T, Ruan J, Homer N, Marth G, Abecasis G, Durbin R. Genome project data processing S: the sequence alignment/map format and SAMtools. Bioinformatics. 2009;25(16):2078–2079. doi: 10.1093/bioinformatics/btp352. \[[DOI](https://doi.org/10.1093/bioinformatics/btp352)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC2723002/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/19505943/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Bioinformatics&title=Genome%20project%20data%20processing%20S:%20the%20sequence%20alignment/map%20format%20and%20SAMtools&author=H%20Li&author=B%20Handsaker&author=A%20Wysoker&author=T%20Fennell&author=J%20Ruan&volume=25&issue=16&publication_year=2009&pages=2078-2079&pmid=19505943&doi=10.1093/bioinformatics/btp352&)\]
*   32.Goris J, Konstantinidis KT, Klappenbach JA, Coenye T, Vandamme P, Tiedje JM. DNA–DNA hybridization values and their relationship to whole-genome sequence similarities. Int J Syst Evol Microbiol. 2007;57(1):81–91. doi: 10.1099/ijs.0.64483-0. \[[DOI](https://doi.org/10.1099/ijs.0.64483-0)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/17220447/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Int%20J%20Syst%20Evol%20Microbiol&title=DNA%E2%80%93DNA%20hybridization%20values%20and%20their%20relationship%20to%20whole-genome%20sequence%20similarities&author=J%20Goris&author=KT%20Konstantinidis&author=JA%20Klappenbach&author=T%20Coenye&author=P%20Vandamme&volume=57&issue=1&publication_year=2007&pages=81-91&pmid=17220447&doi=10.1099/ijs.0.64483-0&)\]
*   33.Kim OS, Cho YJ, Lee K, Yoon SH, Kim M, Na H, Park SC, Jeon YS, Lee JH, Yi H, et al. Introducing EzTaxon-e: a prokaryotic 16S rRNA gene sequence database with phylotypes that represent uncultured species. Int J Syst Evol Microbiol. 2012;62(Pt 3):716–721. doi: 10.1099/ijs.0.038075-0. \[[DOI](https://doi.org/10.1099/ijs.0.038075-0)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/22140171/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Int%20J%20Syst%20Evol%20Microbiol&title=Introducing%20EzTaxon-e:%20a%20prokaryotic%2016S%20rRNA%20gene%20sequence%20database%20with%20phylotypes%20that%20represent%20uncultured%20species&author=OS%20Kim&author=YJ%20Cho&author=K%20Lee&author=SH%20Yoon&author=M%20Kim&volume=62&issue=Pt%203&publication_year=2012&pages=716-721&pmid=22140171&doi=10.1099/ijs.0.038075-0&)\]
*   34.Meier-Kolthoff JP, Auch AF, Klenk H-P, Goker M. Genome sequence-based species delimitation with confidence intervals and improved distance functions. BMC Bioinformatics. 2013;14:60. doi: 10.1186/1471-2105-14-60. \[[DOI](https://doi.org/10.1186/1471-2105-14-60)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC3665452/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/23432962/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=BMC%20Bioinformatics&title=Genome%20sequence-based%20species%20delimitation%20with%20confidence%20intervals%20and%20improved%20distance%20functions&author=JP%20Meier-Kolthoff&author=AF%20Auch&author=H-P%20Klenk&author=M%20Goker&volume=14&publication_year=2013&pages=60&pmid=23432962&doi=10.1186/1471-2105-14-60&)\]
*   35.Altschul SF, Gish W, Miller W, Myers EW, Lipman DJ. Basic local alignment search tool. J Mol Biol. 1990;215(3):403–410. doi: 10.1016/S0022-2836(05)80360-2. \[[DOI](https://doi.org/10.1016/S0022-2836\(05\)80360-2)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/2231712/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=J%20Mol%20Biol&title=Basic%20local%20alignment%20search%20tool&author=SF%20Altschul&author=W%20Gish&author=W%20Miller&author=EW%20Myers&author=DJ%20Lipman&volume=215&issue=3&publication_year=1990&pages=403-410&pmid=2231712&doi=10.1016/S0022-2836\(05\)80360-2&)\]
*   36.Alikhan N-F, Petty NK, Ben Zakour NL, Beatson SA. BLAST ring image generator (BRIG): simple prokaryote genome comparisons. BMC Genomics. 2011;12(1):402. doi: 10.1186/1471-2164-12-402. \[[DOI](https://doi.org/10.1186/1471-2164-12-402)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC3163573/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/21824423/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=BMC%20Genomics&title=BLAST%20ring%20image%20generator%20\(BRIG\):%20simple%20prokaryote%20genome%20comparisons&author=N-F%20Alikhan&author=NK%20Petty&author=NL%20Ben%20Zakour&author=SA%20Beatson&volume=12&issue=1&publication_year=2011&pages=402&pmid=21824423&doi=10.1186/1471-2164-12-402&)\]
*   37.Stamatakis A, Ludwig T, Meier H. RAxML-III: a fast program for maximum likelihood-based inference of large phylogenetic trees. Bioinformatics. 2005;21(4):456–463. doi: 10.1093/bioinformatics/bti191. \[[DOI](https://doi.org/10.1093/bioinformatics/bti191)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/15608047/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Bioinformatics&title=RAxML-III:%20a%20fast%20program%20for%20maximum%20likelihood-based%20inference%20of%20large%20phylogenetic%20trees&author=A%20Stamatakis&author=T%20Ludwig&author=H%20Meier&volume=21&issue=4&publication_year=2005&pages=456-463&pmid=15608047&doi=10.1093/bioinformatics/bti191&)\]
*   38.Lane HW, Sauer RL, Feeback DL. Isolation: NASA experiments in closed-environment living, advanced human life support enclosed system. San Diego, California: American Astronautical Society; 2000. pp. 1–432. \[[Google Scholar](https://scholar.google.com/scholar_lookup?title=Isolation:%20NASA%20experiments%20in%20closed-environment%20living,%20advanced%20human%20life%20support%20enclosed%20system&author=HW%20Lane&author=RL%20Sauer&author=DL%20Feeback&publication_year=2000&)\]
*   39.Chain PSG, Denef VJ, Konstantinidis KT, Vergez LM, Agulló L, Reyes VL, Hauser L, Córdova M, Gómez L, González M, et al. Burkholderia xenovorans LB400 harbors a multi-replicon, 9.73-Mbp genome shaped for versatility. Proc Natl Acad Sci. 2006;103(42):15280–15287. doi: 10.1073/pnas.0606924103. \[[DOI](https://doi.org/10.1073/pnas.0606924103)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC1622818/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/17030797/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Proc%20Natl%20Acad%20Sci&title=Burkholderia%20xenovorans%20LB400%20harbors%20a%20multi-replicon,%209.73-Mbp%20genome%20shaped%20for%20versatility&author=PSG%20Chain&author=VJ%20Denef&author=KT%20Konstantinidis&author=LM%20Vergez&author=L%20Agull%C3%B3&volume=103&issue=42&publication_year=2006&pages=15280-15287&pmid=17030797&doi=10.1073/pnas.0606924103&)\]
*   40.Zgurskaya HI, Nikaido H. Multidrug resistance mechanisms: drug efflux across two membranes. Mol Microbiol. 2000;37(2):219–225. doi: 10.1046/j.1365-2958.2000.01926.x. \[[DOI](https://doi.org/10.1046/j.1365-2958.2000.01926.x)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/10931319/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Mol%20Microbiol&title=Multidrug%20resistance%20mechanisms:%20drug%20efflux%20across%20two%20membranes&author=HI%20Zgurskaya&author=H%20Nikaido&volume=37&issue=2&publication_year=2000&pages=219-225&pmid=10931319&doi=10.1046/j.1365-2958.2000.01926.x&)\]
*   41.Daury L, Orange F, Taveau JC, Verchere A, Monlezun L, Gounou C, Marreddy RK, Picard M, Broutin I, Pos KM, et al. Tripartite assembly of RND multidrug efflux pumps. Nat Commun. 2016;7:10731. doi: 10.1038/ncomms10731. \[[DOI](https://doi.org/10.1038/ncomms10731)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC4754349/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/26867482/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Nat%20Commun&title=Tripartite%20assembly%20of%20RND%20multidrug%20efflux%20pumps&author=L%20Daury&author=F%20Orange&author=JC%20Taveau&author=A%20Verchere&author=L%20Monlezun&volume=7&publication_year=2016&pages=10731&pmid=26867482&doi=10.1038/ncomms10731&)\]
*   42.Hao Z, Lou H, Zhu R, Zhu J, Zhang D, Zhao BS, Zeng S, Chen X, Chan J, He C, et al. The multiple antibiotic resistance regulator MarR is a copper sensor in Escherichia coli. Nat Chem Biol. 2014;10(1):21–28. doi: 10.1038/nchembio.1380. \[[DOI](https://doi.org/10.1038/nchembio.1380)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/24185215/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Nat%20Chem%20Biol&title=The%20multiple%20antibiotic%20resistance%20regulator%20MarR%20is%20a%20copper%20sensor%20in%20Escherichia%20coli&author=Z%20Hao&author=H%20Lou&author=R%20Zhu&author=J%20Zhu&author=D%20Zhang&volume=10&issue=1&publication_year=2014&pages=21-28&pmid=24185215&doi=10.1038/nchembio.1380&)\]
*   43.Blair JMA, Webber MA, Baylay AJ, Ogbolu DO, Piddock LJV. Molecular mechanisms of antibiotic resistance. Nat Rev Micro. 2015;13(1):42–51. doi: 10.1038/nrmicro3380. \[[DOI](https://doi.org/10.1038/nrmicro3380)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/25435309/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Nat%20Rev%20Micro&title=Molecular%20mechanisms%20of%20antibiotic%20resistance&author=JMA%20Blair&author=MA%20Webber&author=AJ%20Baylay&author=DO%20Ogbolu&author=LJV%20Piddock&volume=13&issue=1&publication_year=2015&pages=42-51&pmid=25435309&doi=10.1038/nrmicro3380&)\]
*   44.Randall LP, Woodward MJ. The multiple antibiotic resistance (mar) locus and its significance. Res Vet Sci. 2002;72(2):87–93. doi: 10.1053/rvsc.2001.0537. \[[DOI](https://doi.org/10.1053/rvsc.2001.0537)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/12027588/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Res%20Vet%20Sci&title=The%20multiple%20antibiotic%20resistance%20\(mar\)%20locus%20and%20its%20significance&author=LP%20Randall&author=MJ%20Woodward&volume=72&issue=2&publication_year=2002&pages=87-93&pmid=12027588&doi=10.1053/rvsc.2001.0537&)\]
*   45.Murphy E. Nucleotide sequence of a spectinomycin adenyltransferase AAD(9) determinant from Staphylococcus aureus and its relationship to AAD(3″) (9) Mol Gen Genet. 1985;200(1):33–39. doi: 10.1007/BF00383309. \[[DOI](https://doi.org/10.1007/BF00383309)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/2993813/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Mol%20Gen%20Genet&title=Nucleotide%20sequence%20of%20a%20spectinomycin%20adenyltransferase%20AAD\(9\)%20determinant%20from%20Staphylococcus%20aureus%20and%20its%20relationship%20to%20AAD\(3%E2%80%B3\)%20\(9\)&author=E%20Murphy&volume=200&issue=1&publication_year=1985&pages=33-39&pmid=2993813&doi=10.1007/BF00383309&)\]
*   46.Sierra JM, Martinez-Martinez L, Vazquez F, Giralt E, Vila J. Relationship between mutations in the gyrA gene and quinolone resistance in clinical isolates of Corynebacterium striatum and Corynebacterium amycolatum. Antimicrob Agents Chemother. 2005;49(5):1714–1719. doi: 10.1128/AAC.49.5.1714-1719.2005. \[[DOI](https://doi.org/10.1128/AAC.49.5.1714-1719.2005)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC1087617/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/15855486/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Antimicrob%20Agents%20Chemother&title=Relationship%20between%20mutations%20in%20the%20gyrA%20gene%20and%20quinolone%20resistance%20in%20clinical%20isolates%20of%20Corynebacterium%20striatum%20and%20Corynebacterium%20amycolatum&author=JM%20Sierra&author=L%20Martinez-Martinez&author=F%20Vazquez&author=E%20Giralt&author=J%20Vila&volume=49&issue=5&publication_year=2005&pages=1714-1719&pmid=15855486&doi=10.1128/AAC.49.5.1714-1719.2005&)\]
*   47.Rigsby RE, Fillgrove KL, Beihoffer LA, Armstrong RN. Fosfomycin resistance proteins: a nexus of glutathione transferases and epoxide hydrolases in a metalloenzyme superfamily. Methods Enzymol. 2005;401:367–379. doi: 10.1016/S0076-6879(05)01023-2. \[[DOI](https://doi.org/10.1016/S0076-6879\(05\)01023-2)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/16399398/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Methods%20Enzymol&title=Fosfomycin%20resistance%20proteins:%20a%20nexus%20of%20glutathione%20transferases%20and%20epoxide%20hydrolases%20in%20a%20metalloenzyme%20superfamily&author=RE%20Rigsby&author=KL%20Fillgrove&author=LA%20Beihoffer&author=RN%20Armstrong&volume=401&publication_year=2005&pages=367-379&pmid=16399398&doi=10.1016/S0076-6879\(05\)01023-2&)\]
*   48.Cosentino S, Voldby Larsen M, Møller Aarestrup F, Lund O. PathogenFinder - distinguishing friend from foe using bacterial whole genome sequence data. PLoS One. 2013;8(10):e77302. doi: 10.1371/journal.pone.0077302. \[[DOI](https://doi.org/10.1371/journal.pone.0077302)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC3810466/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/24204795/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=PLoS%20One&title=PathogenFinder%20-%20distinguishing%20friend%20from%20foe%20using%20bacterial%20whole%20genome%20sequence%20data&author=S%20Cosentino&author=M%20Voldby%20Larsen&author=F%20M%C3%B8ller%20Aarestrup&author=O%20Lund&volume=8&issue=10&publication_year=2013&pages=e77302&pmid=24204795&doi=10.1371/journal.pone.0077302&)\]
*   49.Ren Y, Ren Y, Zhou Z, Guo X, Li Y, Feng L, Wang L. Complete genome sequence of Enterobacter cloacae subsp. cloacae type strain ATCC 13047. J Bacteriol. 2010;192(9):2463–2464. doi: 10.1128/JB.00067-10. \[[DOI](https://doi.org/10.1128/JB.00067-10)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC2863489/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/20207761/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=J%20Bacteriol&title=Complete%20genome%20sequence%20of%20Enterobacter%20cloacae%20subsp.%20cloacae%20type%20strain%20ATCC%2013047&author=Y%20Ren&author=Y%20Ren&author=Z%20Zhou&author=X%20Guo&author=Y%20Li&volume=192&issue=9&publication_year=2010&pages=2463-2464&pmid=20207761&doi=10.1128/JB.00067-10&)\]
*   50.Singer AC, Shaw H, Rhodes V, Hart A. Review of antimicrobial resistance in the environment and its relevance to environmental regulators. Front Microbiol. 2016;7:1728. doi: 10.3389/fmicb.2016.01728. \[[DOI](https://doi.org/10.3389/fmicb.2016.01728)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC5088501/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/27847505/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Front%20Microbiol&title=Review%20of%20antimicrobial%20resistance%20in%20the%20environment%20and%20its%20relevance%20to%20environmental%20regulators&author=AC%20Singer&author=H%20Shaw&author=V%20Rhodes&author=A%20Hart&volume=7&publication_year=2016&pages=1728&pmid=27847505&doi=10.3389/fmicb.2016.01728&)\]
*   51.Oves M. Antibiotics and heavy metal resistance emergence in water borne Bacteria. J Investig Genomics. 2016;3(2).
*   52.Guérin F, Lallement C, Isnard C, Dhalluin A, Cattoir V, Giard J-C. Landscape of resistance-nodulation-cell division (RND)-type efflux pumps in Enterobacter cloacae Complex. Antimicrob Agents Chemother. 2016;60(4):2373–2382. doi: 10.1128/AAC.02840-15. \[[DOI](https://doi.org/10.1128/AAC.02840-15)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC4808149/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/26856831/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Antimicrob%20Agents%20Chemother&title=Landscape%20of%20resistance-nodulation-cell%20division%20\(RND\)-type%20efflux%20pumps%20in%20Enterobacter%20cloacae%20Complex&author=F%20Gu%C3%A9rin&author=C%20Lallement&author=C%20Isnard&author=A%20Dhalluin&author=V%20Cattoir&volume=60&issue=4&publication_year=2016&pages=2373-2382&pmid=26856831&doi=10.1128/AAC.02840-15&)\]
*   53.Sun J, Deng Z, Yan A. Bacterial multidrug efflux pumps: mechanisms, physiology and pharmacological exploitations. Biochem Biophys Res Commun. 2014;453(2):254–267. doi: 10.1016/j.bbrc.2014.05.090. \[[DOI](https://doi.org/10.1016/j.bbrc.2014.05.090)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/24878531/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Biochem%20Biophys%20Res%20Commun&title=Bacterial%20multidrug%20efflux%20pumps:%20mechanisms,%20physiology%20and%20pharmacological%20exploitations&author=J%20Sun&author=Z%20Deng&author=A%20Yan&volume=453&issue=2&publication_year=2014&pages=254-267&pmid=24878531&doi=10.1016/j.bbrc.2014.05.090&)\]
*   54.Castro-Wallace SL, Chiu CY, John KK, Stahl SE, Rubins KH, McIntyre ABR, Dworkin JP, Lupisella ML, Smith DJ, Botkin DJ, et al. Nanopore DNA sequencing and genome assembly on the international Space Station. Sci Rep. 2017;7(1):18022. doi: 10.1038/s41598-017-18364-0. \[[DOI](https://doi.org/10.1038/s41598-017-18364-0)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC5740133/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/29269933/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Sci%20Rep&title=Nanopore%20DNA%20sequencing%20and%20genome%20assembly%20on%20the%20international%20Space%20Station&author=SL%20Castro-Wallace&author=CY%20Chiu&author=KK%20John&author=SE%20Stahl&author=KH%20Rubins&volume=7&issue=1&publication_year=2017&pages=18022&pmid=29269933&doi=10.1038/s41598-017-18364-0&)\]

## Associated Data

_This section collects any data citations, data availability statements, or supplementary materials included in this article._

### Supplementary Materials

### Data Availability Statement

The genome sequences used in the current study are available on the NCBI Genome Database under the accession numbers listed in Table [1](#Tab1). Detailed function(s) of all the AMR genes associated with 5 ISS strains mentioned in Additional file [3](#MOESM3): Table S3.