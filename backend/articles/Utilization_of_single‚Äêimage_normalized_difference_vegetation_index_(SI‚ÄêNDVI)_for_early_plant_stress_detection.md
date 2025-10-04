---
title: "Utilization of single‐image normalized difference vegetation index (SI‐NDVI) for early plant stress detection"
authors: ["Nicole S Beisel", "Jordan B Callaham", "Natasha J Sng", "Dylan J Taylor", "Anna‐Lisa Paul", "Robert J Ferl"]
journal: "Applications in Plant Sciences"
date: "2018 Oct 19"
doi: "10.1002/aps3.1186"
source_url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6201722/"
---

# Utilization of single‐image normalized difference vegetation index (SI‐NDVI) for early plant stress detection

*Applications in Plant Sciences*, 2018 Oct 19, [doi:10.1002/aps3.1186](https://doi.org/10.1002/aps3.1186)

### Nicole S Beisel
### Jordan B Callaham
### Natasha J Sng
### Dylan J Taylor
### Anna‐Lisa Paul
### Robert J Ferl

## Abstract

### Premise of the Study

An imaging system was refined to monitor the health of vegetation grown in controlled conditions using spectral reflectance patterns. To measure plant health, the single‐image normalized difference vegetation index (SI‐NDVI) compares leaf reflectance in visible and near‐infrared light spectrums.

### Methods and Results

The SI‐NDVI imaging system was characterized to assess plant responses to stress before visual detection during controlled stress assays. Images were analyzed using Fiji image processing software and Microsoft Excel to create qualitative false color images and quantitative graphs to detect plant stress.

### Conclusions

Stress was detected in _Arabidopsis thaliana_ seedlings within 15 min of salinity application using SI‐NDVI analysis, before stress was visible. Stress was also observed during ammonium nitrate treatment of _Eruca sativa_ plants before visual detection. Early detection of plant stress is possible using SI‐NDVI imaging, which is both simpler to use and more cost efficient than traditional dual‐image NDVI or hyper‐spectral imaging.

**Keywords:** early stress detection, imaging, plant health monitoring, vegetation index

* * *

The normalized difference vegetation index (NDVI) has become a standard for vegetation and crop health assessment. NDVI, and NDVI‐like methods, have been used for decades by the National Aeronautics and Space Administration (NASA) Earth Observatory to monitor global vegetation health (Rouse et al., [1973](#aps31186-bib-0004); Tucker and Choudhury, [1987](#aps31186-bib-0007)). More recently, NDVI has been adapted for use in fields and greenhouses growing crops under natural sunlight (reviewed in Yengoh et al., [2014](#aps31186-bib-0008)). Indoor farming is being increasingly relied upon to grow crops in unfavorable environments such as urban areas, areas of extreme temperature, and eventually to support the expansion of human life off‐planet. Because of the completely closed environment of an indoor farm, the early and rapid correction of abiotic stressors such as salt imbalance, low water content, nitrate concentration, and high pH is essential to maintaining plant health and advancing indoor farming applications. Traditional NDVI technology is not ideal for use in indoor farming scenarios because growing crops indoors relies upon fully controlled, artificial lighting for plant growth (Specht et al., [2014](#aps31186-bib-0006)). Traditional artificial light sources used to grow crops in controlled conditions focus on optimizing photosynthesis. The use of artificial lighting containing near‐infrared (NIR) wavelengths enables NDVI‐like evaluations of plants in closed environments. This article demonstrates that NDVI analysis in controlled container environments is an applicable and useful tool in plant health monitoring. Controlled plant stress assays are used to validate the ability of modified NDVI imaging to detect evidence of stress before visual detection. To demonstrate the diverse applications of this approach, two different stress treatments were tested, two different plant species were assayed, and two different growth mediums were utilized.

This work refined an alternate version of the commonly used equation for NDVI, single‐image NDVI (SI‐NDVI), to make early plant stress detection in controlled conditions utilizing NIR and full‐spectrum visible light worthwhile to growers. NDVI is traditionally calculated as a ratio of the spectral reflectance patterns of plant leaves in both the red (590–670 nm) and NIR (700–1100 nm) bands using the equation:

NDVI\=(NIR−Red)/(NIR+Red)(Yengoh et al.,2014)

In contrast, SI‐NDVI relies on comparison between spectral reflectance in the blue and NIR bands using the equation:

SI‐NDVI\=(NIR−Blue)/(NIR+Blue)

Typically, two sensors are needed for NDVI analysis: one to record red light reflectance, and a second to record NIR reflectance (Rouse et al., [1973](#aps31186-bib-0004); Tucker and Choudhury, [1987](#aps31186-bib-0007)). After image capture, precise optical alignment of the two images is then necessary to calculate NDVI. Cameras developed for SI‐NDVI employ a dual bandpass filter such that the single red, green, and blue (RGB) image can be manipulated into a differential image. The dual bandpass filter blocks green, yellow, orange, and red light while allowing blue and NIR light to pass through, repurposing the function of the red channel of the complementary metal oxide semiconductor (CMOS) sensor for NIR. NDVI analysis requires comparison between a portion of the visible light spectrum and the NIR spectrum. For SI‐NDVI, blue light reflectance, as opposed to red light reflectance, is utilized to represent the normalizing portion of the visible light spectrum while the dual bandpass filter lets the red channel of the CMOS sensor record NIR. This modification enables SI‐NDVI analysis using only a single image after parsing the red and blue signals from the image sensor and thus avoids the technically challenging optical alignment process.

Implementation of the SI‐NDVI imaging system enables early stress detection in plants while remaining both cost effective and user friendly. Cost efficiency is due in part to the fact that computer software required for SI‐NDVI analysis is open source and easily accessible. SI‐NDVI analysis allows for both quantitative and qualitative analysis of plant health in controlled environments, thereby making it applicable to lay persons as well as scientists. Qualitative data analysis utilizes Fiji (or ImageJ; Schindelin et al., [2012](#aps31186-bib-0005)), a completely free open source program that is used to produce false color images and color index maps. For quantitative analysis, Excel spreadsheet software (Excel 2010 version 14.0.7212.5000 \[64‐bit\]; Microsoft, Redmond, Washington, USA) is used to track SI‐NDVI color index trends over time. Additional cost savings in this system are based on the lowering cost of commercially available cameras that can be modified for this use, in comparison to the high price of hyper‐spectral imagers.

## METHODS AND RESULTS

A detailed benchside protocol for development and use of the SI‐NDVI imager in controlled plant stress assays is available in Appendix [1](#aps31186-app-0001).

### Camera and camera settings

A GoPro Hero4 Black camera (GoPro Inc., San Mateo, California, USA) was retrofitted with a Back‐Bone Ribcage AIR modification kit (Back‐Bone Gear Inc., Ottawa, Canada) to create the SI‐NDVI imager (Fig. [1](#aps31186-fig-0001)). This camera contains a 12‐megapixel (MP; 4000 × 3000 pixel) CMOS optical sensor. The Back‐Bone system allows for the removal of the internal infrared blocking filter and addition of the ability to accept varied lenses. The lens used in this study is an M12 5.4‐mm MP‐10 with infrared correction. A single‐filter lens with dual bandpass was added (NDVI‐7; IRpro, Brea, California, USA) that allowed light to transmit in the 400–575‐nm range and the 675–775‐nm range. The quality of the images taken can be varied based on intrinsic camera setting options, which include 5 MP, 7 MP, and 12 MP. Camera settings were kept consistent and calibrated to produce the most meaningful data for a given experiment. The Protune settings, optimized for use in our work, on the GoPro Hero4 Black camera were as follows: white balance = 6500 K, color = flat, ISO min = 100, ISO max = 100, sharpness = high, and EV comp = 0.0. These settings produced the images that provided greatest manipulation options in data analysis. It should be noted that it is important to manually lock the white balance and color settings, instead of using autocorrect settings, to prevent discrepancies between images in downstream analysis.

### Lighting

A Heliospectra LX300 lighting system (Heliospectra AB, Göteborg, Sweden) was used for all SI‐NDVI imaging. This system allows for application of 450 nm (blue), 660 nm (red), 735 nm (far red/NIR), and 5700 K (white) LEDs. Additionally, each of the LED light spectra is individually adjustable with this system, thus maximizing customizability. For all experiments in this report, NIR (735 nm) and blue light (450 nm) were supplied to the plant tissue. The exact composition of light wavelengths used (as recorded by an external spectrometer) is provided in a spectral graph (Fig. [2](#aps31186-fig-0002)).

### Downstream image analysis 1: False color image production

After image collection, the photographs from the SI‐NDVI imager can be analyzed qualitatively to produce false color images. Application of the Photo Monitoring plugin (Horning, [2012](#aps31186-bib-0003)) of Fiji is used to begin the photo processing (Schindelin et al., [2012](#aps31186-bib-0005)). The Photo Monitoring graphical user interface (GUI) allows for different options that can be optimized for user needs, including selection of channels for the NDVI equation (Horning, [2012](#aps31186-bib-0003)). Selecting the blue channel in place of the traditionally used red band, and the red channel in place of the NIR band, enables the SI‐NDVI calculation. Proper channel selection in the Photo Monitoring GUI of Fiji is imperative to SI‐NDVI analysis using the NDVI‐7 filter because NIR reflectance is recorded in the red channel of the camera. The following SI‐NDVI equation will be applied to each individual pixel in the image of interest:

SI‐NDVI\=(NIR−Blue)/(NIR+Blue)

To produce a false color image, a color index file must first be generated from the raw SI‐NDVI image. The color index file retains the SI‐NDVI score calculated for each individual pixel and divides the scores into 256 categories termed “color index values.” SI‐NDVI scores range from −1.0 to 1.0; therefore, each color index value category corresponds to an increment of 0.0078125 in SI‐NDVI scores. Using this increment system, a score of −1.0 will be categorized to color index value 0, a score of 0.0 to color index value 127, and a score of 1.0 to color index value 255. False color images are then generated by applying a color lookup table (LUT) to the color index file. LUTs are adjustable, artificially generated color scales that can be set to meet the needs of the user in terms of highlighting pixels with specific color index values in distinct colors. False color images are produced by using the following settings in the Photo Monitoring plugin when applying a LUT: select the option to stretch the NIR band before creating the index, then set the minimum index value for scaling color index image to −1.00 and the maximum to 1.00.

Optimal visual presentation in the false color image is achieved through choice of LUT and the ability to optimize the balance and contrast between colors in any given LUT. Although selection of a color LUT impacts the aesthetic characteristics of a false color image, the selection of one LUT over another has no bearing on the categorization of pixel scores (Fig. [3](#aps31186-fig-0003)). To demonstrate the ability to highlight pixels with high‐scoring color index values in varying colors, multiple LUTs were applied to an image of _Nicotiana benthamiana_ Domin (Fig. [3](#aps31186-fig-0003)D–F). For example, when using the “Jolly Green Cyant” LUT, a pixel with a score of −1.00 will be categorized to color index value 0 and colored white, whereas a pixel with a score of 1.00 will be categorized to color index value 255 and colored dark orange (Fig. [3](#aps31186-fig-0003)F). For comparison, when using a different LUT such as “Physics,” a pixel with an SI‐NDVI score of −1.00 will similarly be categorized to color index value 0, but colored dark blue instead (Fig. [3](#aps31186-fig-0003)E) (Horning, [2012](#aps31186-bib-0003)). A variety of LUTs are included in the Photo Monitoring plugin upon initial download (Horning, [2012](#aps31186-bib-0003)), and more are available online for download ([https://github.com/nedhorning/PhotoMonitoringPlugin/tree/master/downloads](https://github.com/nedhorning/PhotoMonitoringPlugin/tree/master/downloads)). Additionally, users can design custom LUTs (Balor, [2004](#aps31186-bib-0001)) such as the “NDVI Cyantific” and “Jolly Green Cyant” LUTs, which were specifically customized for this work (Fig. [3](#aps31186-fig-0003)D, F, respectively; LUT files available in Appendices [S1](#aps31186-sup-0001) and [S2](#aps31186-sup-0002)).

### Downstream image analysis 2: Graph representation of data

In addition to false color images, the same SI‐NDVI image can be used to generate a graph that displays the number of pixels present at each pixel value. For graph production, the same channel settings are used as previously described in the process of generating false color images. To generate graphs with less background from non‐vegetative material, the settings in the Photo Monitoring GUI can be adjusted to highlight only vegetative data. This is accomplished by exclusively categorizing pixels with an SI‐NDVI score between 0.00 and 1.00, which is done by reducing the increment per color index value category to 0.00390625. All pixels with a score lower than 0.00 are categorized to color index value 0 using this approach. Categorized data are then graphed to examine the number of pixels that were assigned to each color index value (Figs. [3](#aps31186-fig-0003)C, [4](#aps31186-fig-0004)C–D, [5](#aps31186-fig-0005)C–D). Additionally, pixels barely surviving the 0.00 cutoff (color index value 25 and below) are removed from the data set before graphing to focus exclusively on vegetative tissue. Larger color index values seen on the _x_‐axis reflect higher SI‐NDVI scores, whereas higher peaks indicate highly concentrated color index values as reflected on the _y_‐axis (Figs. [3](#aps31186-fig-0003)C, [4](#aps31186-fig-0004)C–D, [5](#aps31186-fig-0005)C–D). Plant health or growth can then be studied by analyzing changes in the curve over time.

### _Arabidopsis thaliana_ salinity stress experiments

Salt treatments of _Arabidopsis_ Heynh. seedlings were used to demonstrate the potential of early stress detection using SI‐NDVI analysis. Sterilized wildtype _Arabidopsis thaliana_ (L.) Heynh. Columbia‐0 seeds were planted onto square 10‐cm2 Petri plates containing 0.5% (w/v) Phytagel (Sigma‐Aldrich, St. Louis, Missouri, USA). Media was prepared using 2.2 g of Murashige and Skoog (MS) salts, 0.5 g of MES hydrate, 5.0 g of sucrose, 1.0 mL of Gamborg vitamins (Sigma‐Aldrich), and then adjusted to pH 5.72 with 1 M KOH. The media was solidified with 0.5% (w/v) Phytagel (Sigma‐Aldrich). Seeds were sown in densities ranging from 18 to 36 seeds per Petri plate. For any individual experiment, plates containing the same density of seeds were used for experimental and control treatments. Petri plates were sealed with porous surgical 3M Micropore tape (3M, Maplewood, Minnesota, USA). Plants were grown for 10–19 d under 24‐h fluorescent growth lights. For any individual experiment, plates containing plants of the same age were used for the experimental and control treatments.

At the start of the stress experiments, both control and treatment plates were acclimated to the Heliospectra LX300 lighting for 2–3 h before administering treatment. Both the SI‐NDVI imager and the normal white light camera were set up using tripods and scheduled to image the plants every 15 min for 24 h. After the acclimation period and the initial images were taken, stress or control treatments were applied to the plants. For the salt stress treatment, 7–10 mL of 3% salt water was applied to the Petri plate to flood the roots, taking care not to flood the leaves. For the control treatment, 7–10 mL of Millipore deionized water was applied to the roots.

Plants treated with salt stress showed little difference to the naked eye 15 min after salt treatment was administered (Figs. [4](#aps31186-fig-0004), [6](#aps31186-fig-0006)). However, in the SI‐NDVI images, stress is detectable in the plants given the salt treatment. After only 15 min of salt exposure, color changes are seen in the false color images of the salt‐stressed plants compared to the control plants (Fig. [4](#aps31186-fig-0004)A, B). This decline in health could also be detected by quantitative image analysis, seen by the decrease in the number of pixels with a high color index value, correlating to a high SI‐NDVI score, in stressed plants compared to control plants over time (Fig. [4](#aps31186-fig-0004)C, D).

Statistical significance was calculated by cropping the images obtained from each replicate into smaller regions of interest (ROIs). For this experiment, eight ROIs were included in the calculation of significance from two biological replicates. The ROIs chosen were non‐overlapping to ensure that any individual plant was only included in a single ROI. Analysis as previously described for graph production was performed on each smaller ROI individually. After this analysis, the numbers of pixels assigned to color index values 115–125 were summed for each individual ROI. The summed pixel counts from all ROIs were then represented graphically using a box‐and‐whisker plot (Fig. [6](#aps31186-fig-0006)), and two‐tailed Student's _t_‐tests assuming equal variances were calculated for comparison between control and stress treatments at each individual time point (Table [1](#aps31186-tbl-0001)). Statistics were calculated using both the data analysis tool in Excel and the t.test() function in R with identical results. Color index values 115–125 were chosen for statistical calculation because the primary decrease seen in color index values over time occurs in this range (as seen in Fig. [4](#aps31186-fig-0004)C). At the initial time point, there was no statistically significant difference between the number of pixels assigned to color index values 115–125 in the control and salt stress treatment groups. After only 15 min of salt stress exposure, however, the number of pixels categorized to color index values 115–125 was significantly lower in the salt‐stressed plants than in the control treatments (Fig. [6](#aps31186-fig-0006)). A single plant from both the control and salt stress treatments was chosen as a visual representative (Fig. [6](#aps31186-fig-0006)). The background has been subtracted in the representative images for clarity.

#### Table 1.

Statistical values obtained from single‐image normalized difference vegetation index (SI‐NDVI) analysis of an _Arabidopsis thaliana_ salinity stress experiment over a 16‐h period.[a](#aps31186-note-0001)


| Comparison tested | _P_ value | _t_‐critical | _t_‐statistic | Degrees of freedom |
| --- | --- | --- | --- | --- |
| Control initial and salt initial | 0.4261 | 2.1448 | 0.81974 | 14 |
| Control 0.25 h and salt 0.25 h | 0.02669 | 2.1448 | 2.4756 | 14 |
| Control 1 h and salt 1 h | 5.59E‐05 | 2.1448 | 5.6894 | 14 |
| Control 9 h and salt 9 h | 8.97E‐08 | 2.1448 | 10.033 | 14 |
| Control 16 h and salt 16 h | 1.37E‐07 | 2.1448 | 9.6934 | 14 |

a

Statistics were calculated using summed pixel counts from color index values 115–125 from eight non‐overlapping regions of interest per treatment, using two‐tailed Student's _t_‐tests assuming equal variances.

### _Eruca sativa_ ammonium nitrate stress experiments

Ammonium nitrate treatments of _E. sativa_ Mill. (arugula) plants on soil were used to demonstrate the potential of early stress detection in a more production‐related growth situation. Sterilized commercial arugula seeds (Arugula Myway no. 67165A; W. Atlee Burpee & Co., Warminster, Pennsylvania, USA) were sown on round, deep‐welled Petri plates 10 cm in diameter containing 0.5% (w/v) Phytagel prepared as described for the _Arabidopsis_ seedlings. Arugula seeds were allowed to germinate on plates for 7 d before transplantation to sterile soil in six‐welled pots, with one arugula seedling transplanted per well. Arugula plants were exposed to 24‐h fluorescent growth lights both during germination on plates and growth on soil. Plants were allowed to grow for a total of 25 d before use for ammonium nitrate assays.

Before application of the ammonium nitrate treatment, the arugula plants were allowed to acclimate to the Heliospectra LX300 lighting overnight. Both the SI‐NDVI imager and the normal white light camera were set up using tripods and scheduled to image the plants every 30 min for 3 d. After acclimation, an initial image was taken prior to administering stress or control treatments. Each six‐welled pot was placed in an individual plastic tray to contain treatment solutions. For both the treatment and control plants, 200 mL of solution was applied to each six‐welled pot by pouring the solution into the plastic tray and allowing the solution to reach the plant through the soil. For the ammonium nitrate treatment, 10× ammonium nitrate solution was utilized based on the recommended concentration of ammonium nitrate in basal Murashige and Skoog medium. For the control treatment, tap water was utilized.

For several days after stress treatment, arugula plants subjected to the ammonium nitrate solution do not appear visibly stressed (Fig. [5](#aps31186-fig-0005)A). Finally, after 60 h of exposure to the high ammonium nitrate concentration, the plants become noticeably wilted, whereas control plants look relatively unchanged (Fig. [5](#aps31186-fig-0005)A, B). Despite the lack of change in the visual appearance of the ammonium nitrate–treated plants, SI‐NDVI quantitative analysis in comparison to control plants enables detection of a decrease in high scoring color index values, correlating to a decrease in healthy plant tissue, as early as 6 h after stress treatment (Fig. [5](#aps31186-fig-0005)C, D).

Analysis was done on a single leaf from five different arugula plants per treatment following the previously described method for graph production. For each time point analyzed, the color index value with the highest pixel count was recorded and termed the “peak color index value.” The peak color index value of each successive time point was then subtracted from the peak color index value at the initial time point before treatment application for each individual arugula leaf analyzed, and the difference was termed the “peak color index value change.” The color index value changes were then represented graphically in a box‐and‐whisker plot (Fig. [5](#aps31186-fig-0005)E), and two‐tailed Student's _t_‐tests assuming equal variances were calculated on the peak color index value change at each time point (Table [2](#aps31186-tbl-0002)). Statistics were calculated using both the data analysis tool in Excel and the t.test() function in R with identical results. By 12 h of treatment exposure, the peak color index value change in the ammonium nitrate–treated plants was statistically significantly different from the peak color index value change in the control plants (Fig. [5](#aps31186-fig-0005)E).

#### Table 2.

Statistical values obtained from single‐image normalized difference vegetation index (SI‐NDVI) analysis of _Eruca sativa_ ammonium nitrate stress experiment over a 60‐h period.[a](#aps31186-note-0002)


| Comparison tested | _P_ value | _t_‐critical | _t_‐statistic | Degrees of freedom |
| --- | --- | --- | --- | --- |
| Control Δ 6 h and ammonium nitrate Δ 6 h | 0.2604 | 2.306 | 1.2111 | 8 |
| Control Δ 12 h and ammonium nitrate Δ 12 h | 0.006 | 2.306 | 3.6998 | 8 |
| Control Δ 24 h and ammonium nitrate Δ 24 h | 0.0494 | 2.306 | 2.3131 | 8 |
| Control Δ 36 h and ammonium nitrate Δ 36 h | 0.0031 | 2.306 | 4.1815 | 8 |
| Control Δ 48 h and ammonium nitrate Δ 48 h | 0.0274 | 2.306 | 2.6925 | 8 |
| Control Δ 60 h and ammonium nitrate Δ 60 h | 1.67E‐06 | 2.306 | 12.401 | 8 |

a

Statistics were calculated using the peak color index value change of five leaf‐localized regions of interest from five individual plants per treatment, using two‐tailed Student's _t_‐tests assuming equal variances. Peak color index value change refers to the difference between the color index value with the highest pixel count for a given time point and the color index value with the highest pixel count at the initial time point.

## CONCLUSIONS

Compared to traditional NDVI or hyper‐spectral imaging approaches, the dollar cost of implementing an SI‐NDVI imaging system is low because SI‐NDVI requires only one camera and can rely on completely free, open source software for analysis. In addition, the implementation barriers within a laboratory setting or greenhouse facilities are essentially nonexistent. To optimize SI‐NDVI imaging to be similar to the historical NDVI applications, precise application of light in the blue and NIR spectrums can be supplied using controlled lighting (Fig. [2](#aps31186-fig-0002)). In our study, this was accomplished through the use of programmable LED lighting. Alternatively, NDVI cameras have been developed to function in natural lighting, such as the smart NDVI camera developed by Dworak and colleagues (Dworak et al., [2013](#aps31186-bib-0002)). This study demonstrated that SI‐NDVI imaging allows for detection of plant stress before it is apparent to the human eye, in controlled conditions using two of the many potential stresses that may be of interest in the laboratory or greenhouse. This work has demonstrated that the SI‐NDVI imaging system is capable of enabling detection of stress in _Arabidopsis_ seedlings within 15 min of exposure to salt on agar plates (Figs. [4](#aps31186-fig-0004), [6](#aps31186-fig-0006)) and in young arugula plants on soil within 6 h of exposure to high concentrations of ammonium nitrate.

When cultivating crops in controlled conditions, it is especially desirable to detect stress early to improve the overall success rate of cultivation. SI‐NDVI imaging has clear applications in the development of indoor farming practices, which are increasingly relied upon to provide fresh food to geographical areas not conducive to crop cultivation, such as in urban cities or areas of extreme temperature. Additionally, SI‐NDVI imaging could potentially be used as a high‐throughput screening technique for identification of mutant phenotypes in controlled laboratory plant studies.

Hence, the implementation of SI‐NDVI will likely improve the success of controlled greenhouse or laboratory growing efforts, and should be tested further. This work has characterized an SI‐NDVI response curve corresponding to salt‐stressed agar‐grown _Arabidopsis_ seedlings and ammonium nitrate–stressed soil‐grown arugula plants. Future research should work toward characterizing SI‐NDVI phenotypes for additional plant stressors, species, and growth mediums. Furthermore, future work should address practical concerns associated with deploying the SI‐NDVI method in real‐world controlled crop cultivation efforts.

## Supporting information

**APPENDIX S1.** A custom color lookup table (LUT) created for this study: NDVI Cyantific.

**APPENDIX S2.** A custom color lookup table (LUT) created for this study: Jolly Green Cyant.

## ACKNOWLEDGMENTS

The authors would like to thank the members of the University of Florida Space Plants lab. This work was supported by NASA Space Life and Physical Sciences (SLPS; grant no. 80NSSC17K0199) and the Florida Space Grant Consortium (grant no. NNX15\_016/FSGC08), awarded to R.J.F. and A.‐L.P.

## Appendix 1. Benchside protocol for development and use of the single‐image normalized difference vegetation index (SI‐NDVI) imager in controlled plant stress assays.

### Parts list

*   GoPro Hero4 Black camera (GoPro Inc., San Mateo, California, USA; [https://cam-do.com/products/gopro-hero4-black](https://cam-do.com/products/gopro-hero4-black))

*   Back‐Bone Ribcage AIR modification kit (Back‐Bone Gear Inc., Ottawa, Canada; [https://www.back-bone.ca/product/ribcage-air-hero4-mod-kit/](https://www.back-bone.ca/product/ribcage-air-hero4-mod-kit/))

*   Infrared‐corrected M12 lens (IRpro, Brea, California, USA; [https://www.irprostore.com/ndvi-7](https://www.irprostore.com/ndvi-7))

*   NDVI‐7 filter (IRpro; [https://www.irprostore.com/ndvi-7](https://www.irprostore.com/ndvi-7))


### GoPro modification

1.  Modify GoPro Hero4 Black camera with the Back‐Bone Ribcage AIR modification kit. Alternatively, a pre‐modified system can be purchased directly from Back‐Bone ([https://www.back-bone.ca/product-category/ribcage\_cameras/](https://www.back-bone.ca/product-category/ribcage_cameras/)). Note: Any camera that allows for removal of the standard infrared blocking filter and addition of new filters may be used instead of the GoPro Hero4 Black.

2.  Remove any infrared filter pre‐loaded into the camera.

3.  Add NDVI‐7 filter to M12 lens.

4.  Mount M12 lens to GoPro with the Back‐Bone Ribcage system.

5.  Download the GoPro app on a compatible smart device, and follow the app's instructions to connect the GoPro camera to the app.

6.  Use the app interface to adjust the focus of the camera as needed.

7.  Open the Protune settings menu from the GoPro app and specify the following settings: White balance: 6500 K Color: flat ISO min: 100 ISO max: 100 Sharpness: high EV comp: 0.0

8.  The SI‐NDVI imager is now ready to capture images for plant health monitoring.


### Creating a false color image from an SI‐NDVI image

1.  Download and install Fiji or ImageJ ([https://imagej.net/Fiji/Downloads](https://imagej.net/Fiji/Downloads)). Note: Fiji is a version of ImageJ that contains more pre‐installed plugins. For this application, either version will be sufficient.

2.  Download the Photo Monitoring Plugin jar file ([https://github.com/nedhorning/PhotoMonitoringPlugin/tree/master/downloads](https://github.com/nedhorning/PhotoMonitoringPlugin/tree/master/downloads)).

3.  Manually copy the Photo\_Monitoring executable jar file into the plugins folder created from the initial Fiji download.

4.  (Optional) Additional color lookup tables (LUTs) tailored for NDVI analyses can be downloaded and installed by manually copying the LUT file into the “luts” folder within the Photo Monitoring Plugin folder ([https://github.com/nedhorning/PhotoMonitoringPlugin/tree/master/downloads](https://github.com/nedhorning/PhotoMonitoringPlugin/tree/master/downloads)). Note: The custom LUTs created for use in this work, named “NDVI Cyantific” and “Jolly Green Cyant” are available for download in Appendices S1 and S2. These can also be installed by manually copying the files into the “luts” folder within the Photo Monitoring Plugin folder.

5.  Open the ImageJ application from within the Fiji download folder; a graphical user interface (GUI) will open (Fig. [Figure A1](#aps31186-fig-0007)).

6.  Drag a raw image from the SI‐NDVI imager into the GUI. The GUI will display <<Drag and Drop>>.

7.  Open the Photo Monitoring plugin by clicking the “Plugins” tab on the GUI and finding the “Photo Monitoring” menu. Then select “Single Image Index Processing from Displayed Image” (Fig. [Figure A2](#aps31186-fig-0008)).

8.  A new GUI will open. For creating false color images, the settings options are shown below in Fig. [Figure A3](#aps31186-fig-0009). Note: The option to “Select output color table for color index image” will designate which LUT is used to produce the false color image. This choice will not impact quantitative analysis. All LUTs downloaded and copied into the “luts” folder of the Photo Monitoring plugin will appear in this dropdown menu. Note: The settings used for graph production differ slightly and will be shown separately.

9.  Select OK once all settings have been verified.

10.  A false color image will now appear on the screen (Fig. [Figure A4](#aps31186-fig-0010)). This image can be saved in a variety of file formats from the “File” tab in the main GUI.


Note: Balance and contrast may be adjusted for aesthetic purposes by clicking the “Image” tab in the GUI, and then using the options available from the “Adjust” menu.

### Graph production from an SI‐NDVI image

1.  Follow steps 1–6 of the “Creating a false color image from an SI‐NDVI image” section above.

2.  Once the new GUI opens (Fig. [Figure A5](#aps31186-fig-0011)), select the settings shown for graph production. Set the minimum index value for scaling color index to 0 and the maximum index value to 1.00 to focus exclusively on pixels corresponding to vegetation. Uncheck the box to “Stretch the NIR band before creating index” when producing graphs. Note: The option to “Select output color table for color index image” will dictate the LUT utilized to create the image. This has no effect on quantitative analysis.

3.  Select OK once all settings have been verified.

4.  A new false color image will appear (Fig. [Figure A6](#aps31186-fig-0012)). Navigate to the “Analyze” tab of the GUI. Select “Histogram” from the dropdown menu. A histogram window will now appear, as shown in Fig. [Figure A6](#aps31186-fig-0012).

5.  Click “Copy” from within the histogram window.

6.  Open Microsoft Excel (we used Excel 2010 version 14.0.7212.5000 \[64‐bit\]; Microsoft, Redmond, Washington, USA) or any other spreadsheet program. Paste in the data copied from the histogram.

7.  The data from the histogram will be pasted as two columns, a sample is shown in Fig. [Figure A7](#aps31186-fig-0013). The first column represents the 255 color index values the SI‐NDVI scores are categorized by, while the second column contains the total number of pixels from the image that fell within any given color index value.

8.  Pixel counts can then be utilized for graph production, and SI‐NDVI scores can be tracked over time.


Beisel, N. S. , Callaham J. B., Sng N. J., Taylor D. J., Paul A.‐L., and Ferl R. J.. 2018. Utilization of single‐image normalized difference vegetation index (SI‐NDVI) for early plant stress detection. Applications in Plant Sciences 6(10): e1186.

## LITERATURE CITED

1.  Balor, K. G. 2004. LUT Editor. Available at website [https://imagej.nih.gov/ij/plugins/lut-editor.html](https://imagej.nih.gov/ij/plugins/lut-editor.html) \[accessed 25 September 2018\].
2.  Dworak, V. , Selbeck J., Dammer K. H., Hoffman M., Zarezadeh A. A., and Bobda C.. 2013. Strategy for the development of a smart NDVI camera system for outdoor plant detection and agricultural embedded systems. Sensors 13: 1523–1538. \[[DOI](https://doi.org/10.3390/s130201523)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC3649405/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/23348037/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Sensors&title=Strategy%20for%20the%20development%20of%20a%20smart%20NDVI%20camera%20system%20for%20outdoor%20plant%20detection%20and%20agricultural%20embedded%20systems&author=V.%20Dworak&author=J.%20Selbeck&author=K.%20H.%20Dammer&author=M.%20Hoffman&author=A.%20A.%20Zarezadeh&volume=13&publication_year=2013&pages=1523-1538&pmid=23348037&doi=10.3390/s130201523&)\]
3.  Horning, N. 2012. Update on the photo monitoring plugin for ImageJ/Fiji. Website [https://publiclab.org/notes/nedhorning/11-1-2012/update-photo-monitoring-plugin-imagejfiji](https://publiclab.org/notes/nedhorning/11-1-2012/update-photo-monitoring-plugin-imagejfiji) \[accessed 23 February 2018\].
4.  Rouse, J. W. , Haas R. H., Schell J. A., and Deering D.W.. 1973. Monitoring vegetation systems in the great plains with ERTS. Third NASA ERTS Symposium, NASA SP‐351 I, Washington, D.C., USA, 1973, 309–317.
5.  Schindelin, J. , Arganda‐Carreras I., Frise E., Kaynig E., Longair M., Pietzch T., Preibisch S., et al. 2012. Fiji: An open‐source platform for biological‐image analysis. Nature Methods 9: 676–682. \[[DOI](https://doi.org/10.1038/nmeth.2019)\] \[[PMC free article](https://www.ncbi.nlm.nih.gov/articles/PMC3855844/)\] \[[PubMed](https://pubmed.ncbi.nlm.nih.gov/22743772/)\] \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Nature%20Methods&title=Fiji:%20An%20open%E2%80%90source%20platform%20for%20biological%E2%80%90image%20analysis&author=J.%20Schindelin&author=I.%20Arganda%E2%80%90Carreras&author=E.%20Frise&author=E.%20Kaynig&author=M.%20Longair&volume=9&publication_year=2012&pages=676-682&pmid=22743772&doi=10.1038/nmeth.2019&)\]
6.  Specht, K. , Siebert R., Hartmann I., Freisinger U. B., Sawicka M., Werner A., Thomaier S., et al. 2014. Urban agriculture of the future: An overview of sustainability aspects of food production in and on buildings. Agriculture and Human Values 31: 33–51. \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Agriculture%20and%20Human%20Values&title=Urban%20agriculture%20of%20the%20future:%20An%20overview%20of%20sustainability%20aspects%20of%20food%20production%20in%20and%20on%20buildings&author=K.%20Specht&author=R.%20Siebert&author=I.%20Hartmann&author=U.%20B.%20Freisinger&author=M.%20Sawicka&volume=31&publication_year=2014&pages=33-51&)\]
7.  Tucker, C. J. , and Choudhury B. J.. 1987. Satellite remote sensing of drought conditions. Remote Sensing of Environment 23(2): 243–251. \[[Google Scholar](https://scholar.google.com/scholar_lookup?journal=Remote%20Sensing%20of%20Environment&title=Satellite%20remote%20sensing%20of%20drought%20conditions&author=C.%20J.%20Tucker&author=B.%20J.%20Choudhury&volume=23&issue=2&publication_year=1987&pages=243-251&)\]
8.  Yengoh, G. T. , Dent D., Olsson L., Tengberg A. E., and Tucker C. J.. 2014. The use of the Normalized Difference Vegetation Index (NDVI) to assess land degradation at multiple scales: A review of the current status, future trends, and practical considerations. Lund University Center for Sustainability Studies (LUCSUS), and the Scientific and Technical Advisory Panel of the Global Environment Facility (STAP/GEF), Lund, Sweden. \[[Google Scholar](https://scholar.google.com/scholar_lookup?title=The%20use%20of%20the%20Normalized%20Difference%20Vegetation%20Index%20\(NDVI\)%20to%20assess%20land%20degradation%20at%20multiple%20scales:%20A%20review%20of%20the%20current%20status,%20future%20trends,%20and%20practical%20considerations&author=G.%20T.%20Yengoh&author=D.%20Dent&author=L.%20Olsson&author=A.%20E.%20Tengberg&author=C.%20J.%20Tucker&publication_year=2014&)\]

## Associated Data

_This section collects any data citations, data availability statements, or supplementary materials included in this article._

### Supplementary Materials

**APPENDIX S1.** A custom color lookup table (LUT) created for this study: NDVI Cyantific.

**APPENDIX S2.** A custom color lookup table (LUT) created for this study: Jolly Green Cyant.