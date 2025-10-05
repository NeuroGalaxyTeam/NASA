---
title: "Draft Genome Sequence of a Clinical Isolate of Fusarium fujikuroi Isolated from a Male Patient with Acute Myeloid Leukemia"
authors: ["Camilla Urbaniak", "Sanjeet Dadwal", "Karine Bagramyan", "Kasthuri Venkateswaran"]
journal: "Genome Announcements"
date: "2018 Jun 21"
doi: "10.1128/genomeA.00476-18"
source_url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6013642/"
---

# Draft Genome Sequence of a Clinical Isolate of Fusarium fujikuroi Isolated from a Male Patient with Acute Myeloid Leukemia

*Genome Announcements*, 2018 Jun 21, [doi:10.1128/genomeA.00476-18](https://doi.org/10.1128/genomeA.00476-18)

### Camilla Urbaniak
### Sanjeet Dadwal
### Karine Bagramyan
### Kasthuri Venkateswaran

## ABSTRACT

Here, we present the draft whole-genome sequence of a clinical isolate of _Fusarium fujikuroi_ cultured from a patient undergoing chemotherapy for refractory acute myeloid leukemia.

## GENOME ANNOUNCEMENT

_Fusarium_ was first discovered in 1958, and while notorious for causing the devastating disease it causes in plants and crops, it is now recognized as an emerging global opportunistic human pathogen causing numerous cases of fusariosis every year ([1](#B1), [2](#B2)). While roughly 80% of the human cases of fusariosis are caused by members of the _Fusarium oxysporum_ and _Fusarium solani_ species complexes, there are many infections attributed to the _Fusarium fujikuroi_ species complex. Here, we report the draft whole-genome sequence of _F. fujikuroi_ strain COH1152, which was isolated from a 68-year-old male with refractory acute myeloid leukemia. While undergoing chemotherapy, he developed a large lesion on his left leg after sustaining minor trauma, followed by neutropenic fever and multiple small painful nodules on his face, abdomen, and thighs. The biopsy sample of the left thigh skin lesion showed invasive hyphal elements, and a _Fusarium_ sp., as identified by morphology, was isolated from both blood and tissue cultures. A _Fusarium_ isolate, cultured from the blood and denoted COH1152, was sent for whole-genome sequencing and identified as the species _F. fujikuroi_.

The COH1152 genome was paired-end sequenced (2 × 100 bp) on the Illumina HiSeq platform with a 350-bp insert size, resulting in a total of 41 million reads (GC content, 47.5%). Trimmomatic, on the Galaxy server ([https://usegalaxy.org](https://usegalaxy.org/)), was used to remove the sequencing adaptors (settings, max mismatch = 2, how accurate the match between the two “adaptor ligated” reads = 30, and how accurate the match between any adaptor = 10) and to trim the leading and trailing ends (setting, minimum quality required to keep a base = 3). Postprocessed reads were _de novo_ assembled with ABySS version 2.0.2 ([3](#B3)), using a k-mer size of 88. The COH1152 genome assembly resulted in a genome size of 48 Mb, with an _N_50 value of 1,212,708 bp. The number of scaffolds generated was 4,495, with a max scaffold length of 6,034,165 bp. The number of scaffolds over 1 kb was 501.

A second clinical _Fusarium_ isolate, COH1141, as identified by morphology, was cultured from another patient also receiving chemotherapy for acute myeloid leukemia. However, the isolate that was sent for whole-genome sequencing was probably a laboratory contaminant of _Aspergillus niger_. We, however, have chosen to upload its draft genome sequence for public accessibility (k-mer size, 89; genome size, 32 Mb; number of scaffolds over 1 kb, 350).

### Accession number(s).

The assembled whole-genome sequences have been deposited in DDBL/EMBL/GenBank under the accession numbers [QBDQ00000000](https://www.ncbi.nlm.nih.gov/nuccore/QBDQ00000000) (_Fusarium fujikuroi_ COH1152) and [QBDR00000000](https://www.ncbi.nlm.nih.gov/nuccore/QBDR00000000) (_Aspergillus niger_ COH1141). The sequences have also been deposited in the NASA GeneLab and can be found online ([https://genelab-data.ndc.nasa.gov/genelab/accession/GLDS-177/](https://genelab-data.ndc.nasa.gov/genelab/accession/GLDS-177/)). This is the first version.

## ACKNOWLEDGMENTS

Part of the research described in this publication was carried out at the Jet Propulsion Laboratory, California Institute of Technology, under a contract with NASA.

This research was funded by a 2012 Space Biology NNH12ZTT001N grant 19-12829-26 under Task Order NNN13D111T award to K.V. Funding for C.U. was supported by the NASA Postdoctoral Program.

We thank Markus Kalkum for his services at the clinical fungal isolate bank at City of Hope National Medical Center. Government sponsorship is acknowledged.

## Footnotes

**Citation** Urbaniak C, Dadwal S, Bagramyan K, Venkateswaran K. 2018. Draft genome sequence of a clinical isolate of _Fusarium fujikuroi_ isolated from a male patient with acute myeloid leukemia. Genome Announc 6:e00476-18. [https://doi.org/10.1128/genomeA.00476-18](https://doi.org/10.1128/genomeA.00476-18).

## REFERENCES

*   1.Gordon TR. 2017. _Fusarium oxysporum_ and the _fusarium_ wilt syndrome. Annu Rev Phytopathol 55:23–39. doi: 10.1146/annurev-phyto-080615-095919. \[[DOI](https://doi.org/10.1146/annurev-phyto-080615-095919)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/28489498/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Annu%20Rev%20Phytopathol&title=Fusarium%20oxysporum%20and%20the%20fusarium%20wilt%20syndrome&author=TR%20Gordon&volume=55&publication_year=2017&pages=23-39&pmid=28489498&doi=10.1146/annurev-phyto-080615-095919&)\]
*   2.Al-Hatmi AMS, Hagen F, Menken SBJ, Meis JF, de Hoog GS. 2016. Global molecular epidemiology and genetic diversity of _Fusarium_, a significant emerging group of human opportunists from 1958 to 2015. Emerg Microbes Infect 5:e124. doi: 10.1038/emi.2016.126. \[[DOI](https://doi.org/10.1038/emi.2016.126)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC5180370/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/27924809/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Emerg%20Microbes%20Infect&title=Global%20molecular%20epidemiology%20and%20genetic%20diversity%20of%20Fusarium,%20a%20significant%20emerging%20group%20of%20human%20opportunists%20from%201958%20to%202015&author=AMS%20Al-Hatmi&author=F%20Hagen&author=SBJ%20Menken&author=JF%20Meis&author=GS%20de%20Hoog&volume=5&publication_year=2016&pages=e124&pmid=27924809&doi=10.1038/emi.2016.126&)\]
*   3.Simpson JT, Wong K, Jackman SD, Schein JE, Jones SJM, Birol İ. 2009. ABySS: a parallel assembler for short read sequence data. Genome Res 19:1117–1123. doi: 10.1101/gr.089532.108. \[[DOI](https://doi.org/10.1101/gr.089532.108)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC2694472/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/19251739/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Genome%20Res&title=ABySS:%20a%20parallel%20assembler%20for%20short%20read%20sequence%20data&author=JT%20Simpson&author=K%20Wong&author=SD%20Jackman&author=JE%20Schein&author=SJM%20Jones&volume=19&publication_year=2009&pages=1117-1123&pmid=19251739&doi=10.1101/gr.089532.108&)\]