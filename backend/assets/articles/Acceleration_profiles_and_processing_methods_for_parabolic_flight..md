---
title: "Acceleration profiles and processing methods for parabolic flight"
authors: ["Christopher E Carr", "Noelle C Bryan", "Kendall N Saboda", "Srinivasa A Bhattaru", "Gary Ruvkun", "Maria T Zuber"]
journal: "NPJ Microgravity"
date: "2018 Aug 7"
doi: "10.1038/s41526-018-0050-3"
source_url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6081456/"
---

# Acceleration profiles and processing methods for parabolic flight

*NPJ Microgravity*, 2018 Aug 7, [doi:10.1038/s41526-018-0050-3](https://doi.org/10.1038/s41526-018-0050-3)

### Christopher E Carr
### Noelle C Bryan
### Kendall N Saboda
### Srinivasa A Bhattaru
### Gary Ruvkun
### Maria T Zuber

## Abstract

Parabolic flights provide cost-effective, time-limited access to “weightless” or reduced gravity conditions, facilitating research and validation activities that complement infrequent and costly access to space. Although parabolic flights have been conducted for decades, reference acceleration profiles and processing methods are not widely available. Here we present a solution for collecting, analyzing, and classifying the altered gravity environments experienced during parabolic flights, which we validated during a Boeing 727-200F flight with 20 parabolas. All data and analysis code are freely available. Our solution can be integrated with diverse experimental designs, does not depend upon accelerometer orientation, and allows unsupervised classification of all phases of flight, providing a consistent and open-source approach to quantifying gravito-inertial accelerations (GIA), or _g_ levels. As academic, governmental, and commercial use of space advances, data availability and validated processing methods will enable better planning, execution, and analysis of parabolic flight experiments, and thus facilitate future space activities.

## Introduction

Parabolic flights are cost-effective, ground-based analogs that achieve variable _g_ (_Earth-relative GIA_) level environments that recreate conditions experienced during space flight.[1](#CR1),[2](#CR2) Specialized aircraft can maintain approximately 20–30 s of a 0 _g_, freefall environment before an increased GIA recovery phase (Fig. [1a](#Fig1)). Modified trajectories can achieve reduced _g_ levels experienced on the lunar surface or on Mars (0.17 and 0.38 _g_, respectively). Parabolic flights serve as valuable proving grounds for experimental efforts to maximize the research potential of the International Space Station[3](#CR3),[4](#CR4) and to accommodate increasing interest in commercial space flight.[5](#CR5),[6](#CR6)

Here we address the limited availability of open access acceleration datasets containing parabolic flight profiles and enable unsupervised and precise characterization of timing and _g_ levels for all flight phases. We demonstrate this approach using a small (65 g) battery powered commercially available accelerometer and vibration measurement system. Together, these tools and products reflect a comprehensive solution for experiment planning, execution, and analysis of _g_ level and vibrations during parabolic flight.

## Results

Flight operations were conducted on November 17, 2017 onboard a Boeing 727-200F aircraft (G-Force One®, Zero Gravity Corporation). Four sets of parabolas were performed with 5, 6, 4, and 5 parabolas, respectively. The first set targeted, in order, Mars _g_, Mars _g_, Lunar _g_, 0 _g_, and 0 _g_. All other parabolas targeted 0 _g_. Data were collected for 1.77 h during all phases of flight from a Slam Stick X™ (Mide Technology Corp.) mounted in the rear of the research section (Fig. [1](#CR1)b-c). Direct Current (DC) acceleration was recorded at 411 Hz. Additional data, calibration, and calibration error ( < 2%) assessment are described in Methods.

In any given experiment, one accelerometer orientation may be more appropriate than another. Thus, our phase of flight identification is based on a metric that is independent of accelerometer orientation: the Euclidean norm of the accelerometer (x,y,z) axes, which we refer to as _g_ level or _g_ (Methods).

To facilitate our analysis (Fig. [1](#Fig1)d, Methods, Supplementary Figs. 1-5), acceleration data were filtered (Fig. [1](#Fig1)e) using a zero-delay, low-pass filter prior to parabola identification using change point detection.[7](#CR7),[8](#CR8) Conceptually, this process finds the point for which a statistical property (e.g., mean), has minimum total residual error summed across two groups, e.g., before and after the change point. Here residual error is the difference between an observed value and the statistical property for the group.

Change point detection was first applied to the filtered _g_ level, _g_filt, to identify differences in mean _g_ levels in an unsupervised manner (Fig. [1](#Fig1)f). To break down the flight into regions of stable _g_ levels, data within 10 s of each change point was subjected to secondary change point detection using a linear slope metric, which segmented the flight into regions of rapid “transition” (indicated by dotted lines, Fig. [1](#CR1)g-i) and more stable regimes. Non-transition periods were subsequently classified into “parabola,” “hypergravity,” and “other” based on their duration and _g_ level (Fig. [2](#CR2)a-b; Methods). These “hypergravity” periods result from entry into and exit from the “parabola” periods.

## Discussion

Parabolic flights provide the opportunity to perform simulated space research in a cost-effective manner. Recently, Lambot and Ord (2016) evaluated data from over 400 parabolic flights and assessed the quality of reduced _g_ datasets.[9](#CR9) Although considerable effort was dedicated to identifying the highest quality, low _g_ time periods (with variations less than ± 0.01 _g_) from these flights, neither the acquisition hardware, the raw data, nor the code implemented for analysis, are currently available to the public. Indeed, when reviewing the literature, we found no such easily accessible parabolic flight acceleration data nor published analysis methodology.

Here, we provide the following: (1) a commercially available hardware solution for data acquisition; (2) raw and calibrated data for all phases of flight; (3) data analysis methodology that is independent of accelerometer orientation, and (4) characterization of _g_ levels and durations achieved for 20 parabolas. In addition, the code implementing our methodology to categorize all phases of flight and characterize _g_ levels and durations of parabolas is publicly available in order to facilitate future parabolic flight research. In addition, our methods could be adapted to analysis of data from suborbital flights, drop towers, or studies involving launch and landing accelerations.

Our hardware solution, the Slam Stick X™, offers a compact, flexible, low-power, high resolution solution for acceleration and vibration monitoring with favorable comparison to alternatives (Methods). The small size facilitates integration into experiments and measurement of the local GIA environment, which is not constant across the aircraft. In addition, mounting with double-sided tape is simple, robust, and does not impact the frequency response (Methods).

Lambot and Ord[9](#CR9) identified a “sweet zone” in the middle of the parabola with low acceleration deviation. Our data are consistent with this conclusion (Supplementary Fig. 8), although Lambot and Ord[9](#CR9) used, after unspecified low-pass filtering, a much more stringent tolerance (± 0.01 _g_) that was not met by our filtered data. We encourage future parabolic flight experimenters to release raw data as well as to provide data processing details (ideally including in executable form) to facilitate validation and improvement of processing algorithms, as well as refine expected _g_ levels and support planning and analysis that can be tailored to specific experimenter needs.

Due to the limited availability and high cost of actual space environments, it is imperative that we continue to utilize parabolic flights as a means to simulate space – and to understand the accuracy and limitations of this modality. By making our data and methods available we hope to enable others to better plan, execute, and analyze parabolic flight experiments, and thus to help facilitate future space activities.

## Methods

### Device Selection

The Slam Stick X™ (Mide Technology Corp., [www.mide.com](http://www.mide.com/)) was selected based on its size (76 mm × 30 mm × 15 mm), low mass (65 g), integrated battery, manual and USB interfaces, and combination DC (Analog Devices ADXL345) and piezoelectric (TE 832M1) accelerometers to enable accuracy at both low (e.g., down to 0 Hz) and high frequencies (up to 20 kHz sample frequency). The aluminum body was selected to provide improved high frequency response. Additional integrated sensors included temperature and pressure (NXP MPL3115) and control pad temperature and pressure (TE MS8607).

Alternative data acquisition systems include many commercial off the shelf (COTS) accelerometers, as well as the NASA Suborbital Flight Environment Monitor (SFEM)[9](#CR9). There may be potential benefits of using the SFEM, although the Slam Stick X™ offers comparable or longer recording time, DC and piezoelectric accelerometers (enabling both _g_ level and high frequency vibration measurements), higher sampling frequencies, a wider operating temperature range (− 40 °C to + 80˚C) and much lower ( > 10 × ) mass and volume. Another COTS option is the Lansmont 3X90  , although the Slam Stick X™ specifications provide benefits in several areas (size, mass, sampling rates, and temperature range).

One consideration for parabolic flight experiments is that the GIA environment is not constant across the aircraft. In some cases, it may be adequate to have a single reference flight profile to be used by multiple experiment teams. However, some applications may be better served through measurement of the local GIA environment of a given experimental apparatus. Here, the small size of our solution facilitates direct incorporation into a payload, as well as placement in the desired location or orientation.

When selecting a data acquisition solution, it is also important to consider how the mounting of the accelerometer itself may impact the frequency response; in our case, use of double-sided sticky tape represents both an extremely practical and low bias option, enabled by the low device mass. Because no additional materials separate the accelerometer from the aircraft, there is no need to correct for the frequency response of the mounting interface.

### Device mounting and data acquisition

Zero Gravity Corporation (ZGC) utilizes a standard system of mounting hardware to the aircraft structure consisting of a baseplate (61 cm × 61 cm × 1.27 cm aluminum plate, e.g., McMaster Carr 86825K25) bolted to the aircraft structure using four clearance holes at the corners of a square with 50.8 cm (20 in) sides, centered on the baseplate. Washers (McMaster Carr 92503A230) were used for mounting in combination with AN-6 steel bolts (3/8 inch) provided by ZGC. The Slam Stick X™ was mounted to a standard baseplate with double-sided sticky tape (3 M 950), which is the preferred mounting method due to its vibration frequency response (near unity) and robustness: this method has previously been validated during vibration testing at over 75 g at 1 kHz[1](#Fn1). The Slam Stick X™ was configured using Slam Stick Lab 1.8. Acquisition was initiated and terminated manually using the control pad on the device. Sampling rates were 5 kHz (piezoelectric vibration sensor), 411 Hz (DC acceleration), and 1 Hz (pressure and temperature).

### Data calibration

The raw IDE file generated by the Slam Stick X™ was converted to calibrated MAT (MATLAB, The Mathworks, Natick, MA) files using the ide2csv.exe command line utility (Mide Technology Corp.) using the factory calibration. Note that data calibration and export functions can also be performed directly using Slam Stick Lab. Here we focus on data from the DC accelerometer. We note that temperature varied less than 1 °C and pressure showed a typical regulated profile and was highly stable during parabolas (Supplementary Fig. 5).

### Orientation-independent approach

In any given experiment, one accelerometer orientation may be more appropriate than another. Thus, we based our phase of flight identification method (below) on a measure that is independent of the accelerometer orientation: the Euclidean norm of the x, y, and _z_ axes, which we hereafter refer to as the _g_ level or _g_. As this variable is a positive scalar, it does not capture directional fluctuations in the gravity vector. Thus, for characterization of phases of flight, vector-based statistics should be used. For example, we estimated the mean g level during a 0 _g_ parabola by averaging the _x_, _y_, and _z_ components, and then computing the norm.

### Calibration verification

The expected value of the _g_ level is unity on Earth under non-accelerated conditions; as a verification of our accelerometer calibration, we found the norm under lab bench conditions (14.2 s recording) to be 0.9840 (rms) and 0.9840 ± 0.0055 (mean ± SD), consistent with < 2% error. This is a lower bound when vibration or specific force other than that caused by gravity is present, consistent with the rms value (1.07) observed during flight. Specific force was concentrated in the _z_ axis as measured by root mean square (rms) values (0.0466, 0.0775, 1.0662 for _x_, _y_, and _z_ axes, respectively), consistent with the accelerometer orientation (Fig. [1c](#Fig1)). Calibration accuracy was also assessed after filtering (see below).

### Phase of flight characterization

For parabola identification, we first filtered the raw data using a zero-phase 12th order Butterworth filter using the _designfilt()_ function using a half power frequency (HPF) as described below. Next, we utilized change point detection[7](#CR7),[8](#CR8) as implemented by the MATLAB _FindChangePts()_ function.

Change point detection was first applied to the filtered _g_ level _g_filt to identify differences in mean _g_ levels. A known number of change points was specified based on the parabola number within each set, e.g., two times the number of parabolas, plus two additional transitions (first pre-parabola pull up; last post-parabola pull up) for each set of parabolas. In our case sets of 5, 6, 4, and 5 (20 total) parabolas become 12, 14, 10, and 12 change points. This total number of change points (48) was specified and _FindChangePts()_ identified all _g_ level change points in an unsupervised manner (Fig. [1](#Fig1)f).

We desire to break down the flight into regions of stable _g_ levels. Thus, for each change point, we used a secondary change point detection to identify differences in the slope of the _g_ level vs. time curves. Data within 10 s of each change point was subjected to this secondary change point detection using a linear slope metric. This step successfully segmented the flight into regions of rapid “transition” (indicated by dotted lines, Fig. [1](#CR1)g-i) and more stable regimes. This resulted in 97 flight periods (2 × the number of change points + 1).

Classification of non-“transition” flight periods into “parabola,” “hypergravity,” and “other” (which includes straight and level flight as well as standard rate turns) was then performed, first by categorizing any periods with duration > 100 s as “other”, then by segmenting data according to _g_ level (“parabola” ≤ 0.9 _g_, 0.9 < “other” ≤ 1.1 _g_, “hypergravity > 1.1 _g_). Despite its simplicity, this classifier achieved good separation between classes (Fig. [2a](#Fig2)).

Parabola durations (mean ± s.d.) were 19.5 ± 1.4 s (0 _g_, _N_ = 17, range 17 to 24 s), 23.7 s (Lunar _g_; _N_ = 1), and 28.9 ± 0.7 s (Mars _g_; _N_ = 2). The _g_ levels achieved were 0.041 ± 0.005 _g_ (0 _g_) and 0.159 _g_ (lunar _g_). Both Mars parabolas achieved 0.356 _g_, indicating high consistency between parabolas targeting similar _g_ levels. Higher _g_ levels were significantly associated with longer-duration parabolas (Supplementary Fig. 4a), although not when lunar and Mars data were excluded (Supplemental Fig. 4b).

Some limitations are inherent in our study, which focused solely on one flight and 20 parabolas. If analyzing multiple flights, with parabolas performed under more varied conditions, it is possible a slightly more complex classification strategy might be required; however, based on the wide separation between “parabola,” “hypergravity,” and “other” classes, this is not expected to present a significant challenge to standard unsupervised classification approaches (e.g., _k_\-means).

### Filter optimization

To optimize the filter, we selected a HPF based on the _g_ level power spectral density (PSD, Supplementary Fig. 2a). The PSD was computed via the MATLAB _pwelch()_ function with default parameters. To select the HPF, we examined the cumulative sum of the PSD (Supplementary Fig. 2b), which revealed a sharp increase in power above 0.01 Hz. We chose this value (HPF = 0.01 Hz) to maximize the low frequency content of the filtered data while rejecting as much spectral power from higher frequencies as possible. As an example, filtering at HPF = 0.01 Hz preserves parabola dynamics, whereas filtering at HPF = 0.001 Hz does not (Supplementary Fig. 2c). Our selected value provides the smoothest data for identifying parabolas, while still accurately representing _g_ level transitions. A manual procedure identified similar values, e.g., adjusting the HPF toward DC until the rapid transitions between _g_ levels showed systematic bias, then setting the HPF to 10 × this value, also gave HPF = 0.01 Hz.

Filtering reduced the root mean square specific force in the lateral (x) direction but little in other directions (0.0161, 0.0681, 1.0623 for _x_, _y_, _z_, respectively), consistent with low frequency aircraft accelerations mainly due to pitch maneuvers. The _g_ level was near unity during periods of relative calm (Supplemental Fig. [3a-b](#MOESM1)), including the first 1000 s of data collected during largely straight and level flight (rms 0.9919 and 0.9856, raw and filtered, respectively). This unfiltered estimate is 0.8% higher than under lab bench conditions, and both are consistent with accurate sensor calibration at DC to lower than 2% error, based on the factory calibration.

### Regression analysis

Regression of parabola _g_ level on duration was performed using the MATLAB _fitlm()_ function. Confidence intervals were determined using the MATLAB _coefCI()_ function.

### Code availability

The MATLAB scripts implementing our analysis are available at: [https://github.com/CarrCE/zerog.](https://github.com/CarrCE/zerog)

### Data availability

Raw and calibrated data are available via the Open Science Framework at: [https://osf.io/nk2w4/.](https://osf.io/nk2w4/)

## Electronic supplementary material

## Acknowledgements

We thank the MIT Media Lab Space Exploration Initiative for providing the parabolic flight. This work was supported by NASA award NNX15AF85G. N.C.B. was supported by NASA Postdoctoral Fellowship award 80NSSC17K0688.

## Author contributions

C.E.C. designed the experiment. C.E.C., K.S., S.A.B., and N.C.B. built and tested the hardware. N.C.B. and M.T.Z. collected the data. C.E.C. and N.C.B. processed the data. G.R. advised on the experiment design. C.E.C. and N.C.B. wrote, and all authors edited and approved, the paper. C.E.C. is the guarantor.

### Competing interests

The authors declare no competing interest.

## Footnotes

1

Mide Technology Corp., Slam Stick User Manual, Version 2.0

Supported by NASA award NNX15AF85G and by the MIT Media Lab Space Exploration Initiative.

**Publisher's note:** Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.

## Electronic supplementary material

**Supplementary information** accompanies the paper on the _npj Microgravity_ website (10.1038/s41526-018-0050-3).

## References

*   1.Karmali F, Shelhamer M. The dynamics of parabolic flight: flight characteristics and passenger percepts. Acta Astronaut. 2008;63:594–602. doi: 10.1016/j.actaastro.2008.04.009. \[[DOI](https://doi.org/10.1016/j.actaastro.2008.04.009)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC2598414/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/19727328/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Acta%20Astronaut.&title=The%20dynamics%20of%20parabolic%20flight:%20flight%20characteristics%20and%20passenger%20percepts&author=F%20Karmali&author=M%20Shelhamer&volume=63&publication_year=2008&pages=594-602&pmid=19727328&doi=10.1016/j.actaastro.2008.04.009&)\]
*   2.Shelhamer M. Parabolic flight as a spaceflight analog. J. Appl. Physiol. 2016;120:1442–1448. doi: 10.1152/japplphysiol.01046.2015. \[[DOI](https://doi.org/10.1152/japplphysiol.01046.2015)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/26796759/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=J.%20Appl.%20Physiol.&title=Parabolic%20flight%20as%20a%20spaceflight%20analog&author=M%20Shelhamer&volume=120&publication_year=2016&pages=1442-1448&pmid=26796759&doi=10.1152/japplphysiol.01046.2015&)\]
*   3.Rai A, et al. Expanded benefits for humanity from the International Space Station. Acta Astronaut. 2016;126:463–474. doi: 10.1016/j.actaastro.2016.06.030. \[[DOI](https://doi.org/10.1016/j.actaastro.2016.06.030)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Acta%20Astronaut.&title=Expanded%20benefits%20for%20humanity%20from%20the%20International%20Space%20Station&author=A%20Rai&volume=126&publication_year=2016&pages=463-474&doi=10.1016/j.actaastro.2016.06.030&)\]
*   4.Shelhamer, M. Why send humans into space? Science and non-science motivations for human space flight. _Space Policy_, 10.1016/j.spacepol.2017.10.001 (2017).
*   5.Smith L. Commercial space flight. Congr. Dig. 2017;96:30–31. \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Congr.%20Dig.&title=Commercial%20space%20flight&author=L%20Smith&volume=96&publication_year=2017&pages=30-31&)\]
*   6.Musk E. Making humans a multi-planetary species. New Space. 2017;5:46–61. doi: 10.1089/space.2017.29009.emu. \[[DOI](https://doi.org/10.1089/space.2017.29009.emu)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=New%20Space&title=Making%20humans%20a%20multi-planetary%20species&author=E%20Musk&volume=5&publication_year=2017&pages=46-61&doi=10.1089/space.2017.29009.emu&)\]
*   7.Lavielle M. Using penalized contrasts for the change-point problem. Signal Process. 2005;85:1501–1510. doi: 10.1016/j.sigpro.2005.01.012. \[[DOI](https://doi.org/10.1016/j.sigpro.2005.01.012)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Signal%20Process.&title=Using%20penalized%20contrasts%20for%20the%20change-point%20problem&author=M%20Lavielle&volume=85&publication_year=2005&pages=1501-1510&doi=10.1016/j.sigpro.2005.01.012&)\]
*   8.Killick R, Fearnhead P, Eckley IA. Optimal detection of change points with a linear computational cost. J. Am. Stat. Assoc. 2012;107:1590–1598. doi: 10.1080/01621459.2012.737745. \[[DOI](https://doi.org/10.1080/01621459.2012.737745)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=J.%20Am.%20Stat.%20Assoc.&title=Optimal%20detection%20of%20change%20points%20with%20a%20linear%20computational%20cost&author=R%20Killick&author=P%20Fearnhead&author=IA%20Eckley&volume=107&publication_year=2012&pages=1590-1598&doi=10.1080/01621459.2012.737745&)\]
*   9.Lambot, T. & Ord, S. F. Analysis of the quality of parabolic flight. _Next-Generation Suborbital Researchers Conference_, [https://ntrs.nasa.gov/search.jsp?R=20160007932](https://ntrs.nasa.gov/search.jsp?R=20160007932) (2016).

## Associated Data

_This section collects any data citations, data availability statements, or supplementary materials included in this article._

### Supplementary Materials

### Data Availability Statement

Raw and calibrated data are available via the Open Science Framework at: [https://osf.io/nk2w4/.](https://osf.io/nk2w4/)