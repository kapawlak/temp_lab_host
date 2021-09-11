# Lenses, Ray Tracing, and Simple Optical Devices



:::Intro (This week)

In the last lab you studied the bending of a single ray of light at a boundary between two materials, a process known as refraction. The important aspects of refraction are the indices of refraction of the materials and the incident angle the light makes with the boundary.  


In this lab we will study the refraction of multiple rays of light emitted from a single point source as they reach the boundary at the front surface of a lens, then exit through the boundary at the rear surface. We will also do this for sets of parallel rays entering the lens.

:::


---


# Introduction


<!-- Paula's Intro Video -->
::: Video (intro| Introduction to Lenses)
<iframe  width='100%' height='100%'  src="https://www.youtube.com/embed/3nhaqN1jPvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::


A lens is an object that consists of a material of index of refraction $n$, which has two opposite faces that form two spherical boundaries. The shapes of these boundaries are designed so that when multiple rays of light emitted by a single point source pass through the lens, they converge to a unique point, known as the *image point*. The lens thus creates an image of the point source. (The lens boundaries can also be designed so that the rays diverge, and the image point is in front of the lens. We will see how during this lab.)

We will consider two common types of lenses, **convex** and **concave** lenses. Convex lenses are those that bulge outward in the center, with the edge being the narrowest part. Because light passing through such lenses converges to a point on the other side as described above, these are known as *converging* lenses. 

:::Definition Convex Lens
A **convex lens** is a lens that possesses at least one surface that curves outward. Such a lens causes rays of light that travel through it parallel to its principal axis, to converge.
:::

Concave lenses are those that are thicker on the outside and thinner toward the center. (Their faces curve inward.) Later in this lab, we will examine the behavior of concave lenses, which is different from that of convex lenses.


## Curvature and Focal Length

In [](#Activity-playwith) you will explore the relationship between the curvature of a lens and its focal length. In the experiment video, you will be shown three different lenses. They will appear first in profile so that you can see their curvatures: the thicker a lens is at its center (relative to its diameter), the greater the curvature. Next you will see the light source &mdash; in this case a ceiling light. This is the object that will be focused by the lens to the paper below. The lenses will be moved up and down until the light is focused. 

::::::Activity (playwith| Curvature and Focal Length)
Convex lenses are those which bulge outward in the center with the edge being the most narrow part. 
1. Select one of the unlabeled thin lenses. Move it up and down beneath the laboratory’s fluorescent lights. View image 
of ceiling lights using page 52 as a screen. 
:::Exercise
What do you observe about the light passing through the lens?
:::
2. At one height you should see that the lens will focus the light from the fluorescent lights. The lights are long, parallel tubes 
and as a result you see two sharply focused lines. 
:::Note
Different lenses focus the light at different heights above the table. This is due to the fact that the lenses have different focal lengths, a property dependent upon the index of refraction and 
geometry of the lens. 
:::
3. Select a lens and measure the height at which this occurs, then do the same for two other unlabeled 
convex lenses. 
:::Exercise
Is there a relationship between the curvature of the lens and the height at which it focuses? 
:::

4. Now take the concave lens – this one is thickest on the outside and thinnest in the middle. Using the same method find the 
focus height of this lens. 
:::Exercise
Does the concave lens sharply focus the light?
:::

::::::
<!-- End of Exercise 1 -->


In [](#Activity-Focal) we will be more quantitative about the focal lengths. We will show you a video of five parallel rays passing through a concave and a convex lens over graph paper. The graph paper will allow you to measure the focal lengths of these lenses.

::::::Activity (Focal| Measuring Focal Lengths)

While watching [](#Video-5rays), complete the steps listed below to collect your data:

<!-- Jeremy's: 5 rays of light going to two lenses -->
:::Video (5rays| Five Rays and Basic Lenses)
<iframe  width='100%' height='100%'  src="https://www.youtube.com/embed/-Hg40ICmr6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

**Note:** The graph paper used is 4 boxes per inch.

1. Make the video pause when the convex lens is in place.

2. Measure the focal length in units of boxes.

3. Notice that for the concave lens the light does not converge. For this reason we must trace the light backwards. Make the video pause when the concave lens is in place and the traced lines have appeared.

4. Measure this distance in units of boxes.

5. Convert both of your measurements to mm.

:::Exercise
What focal lengths did you measure?
:::
::::::
<!-- End of Exercise 2 -->

## Real Lenses and Aberration

Real lenses do not exactly follow physics equations. In this exercise we will look at a lens that deviates from the thin lens approximation, specifically one that does not focus all parallel light to a single point. Lenses like this are said to exhibit *aberration*. (This particular type of abberation is called *spherical aberration*, because it is caused by the deviation of the spherical curvature of the lens from that of an ideal lens.) In [](#Activity-abb), you will watch a video of five parallel rays passing through a thick, D-shaped lens and study the properties of the refracted rays. 

::::::Activity (abb|Aberration of a Hemispherical Lens)
In this procedure you will use the optical bench. It has a multi-purpose light source and a small circular ray traced platform 
where you set the lens. You are provided with one thin convex block lens and one thick block half lens. You will use both to 
demonstrate focal lengths. 
1. Adjust the grating on the ray box to provide 5 parallel rays.
2. Place the thin convex lens perpendicular to the rays. The imaginary line perpendicular to the lens and running 
exactly through the center is referred to as the optical axis or principal axis. Note that it is necessary to place the lens 
on the front half of the table to observe the intended phenomenon. 
3. Dim the class lights and observe the refracted rays.
:::Exercise
What is the focal length of the lens?
:::
4. Use the thick block half lens. Place the curved surface towards the parallel light source. Observe the refracted 
beams
:::Exercise
Measured from the flat surface, at what distance do the beams converge? 
:::
5. Reverse the orientation of the block such that the flat surface is towards the light source.

:::Exercise
Does the block lens have symmetrical behavior? That is, do the beams converge at the same 
distance from the flat surface? Why might this be the case? Hint: look at the flat boundary, 
comment on the refraction which occurs there
:::
6. Place the concave lens on the platform. Again observe the refracted beams
:::Exercise
Can you measure the focal length of the lens? If you were to trace the refracted rays backwards 
(on the same side as the incident beams) would they converge?
:::
::::::


# Ray Tracing with a Lens of Known Focal Length

:::Video (rt-known|Basic Ray Tracing)
<iframe width='100%' height='100%' src="https://www.youtube.com/embed/PMUqmcHdlUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::
 
An object is some physical entity that either produces light rays of its own (like a light bulb) or reflects them from some other light source (like a page of text, or your pencil). The image is a version of the object as it appears after light coming from it has gone through some optical device, in this case a lens. In the remainder of this lab we will explore how lenses form images, and how the placement of a lens relative to an object determines the location and relative size of the image, and whether it is upright (erect) or inverted.

## Three Principles of Ray Diagrams

We use ray tracing methods to predict the behavior of a lens. We begin with convex lenses, though the same methods apply equally well to concave lenses. There are only three essential premises needed to analyze lenses:

1. A light ray entering a lens parallel to the optical axis passes through the focal point on the other side.

:::Figure (ray1|xl)
![A light ray parallel to the principal axis entering a convex lens from infinity.](imgs/Lab2/fig3_1.JPG "A light ray parallel to the principal axis entering a convex lens from infinity.")

:::

2. A light ray passing through the center of a lens passes through unchanged. *Note that this is true only for thin lenses.*

:::Figure (ray2|xl)
![A light ray passing through the center of a lens from any angle in the principal plane remains unchanged.](imgs/Lab2/fig3_2.JPG "A light ray passing through the center of a lens from any angle in the principal plane remains unchanged.")

:::

3. A light ray passing through the focal point and then through the lens emerges parallel to the optical axis.

:::Figure (ray3|xl)
![A light ray that passes through the focal point of a lens always ends up parallel to the principal axis.](imgs/Lab2/fig3_3.JPG "A light ray passing through the center of a lens from any angle in the principal plane remains unchanged.")

:::


## Ray Tracing Method

1. Pick a point as the object.

2. Draw one line from the point, parallel to the optical axis. From where it hits the lens, draw a line down through the focal point. Be sure to extend it beyond the focal point.

3. Draw one line from the point to the center of the lens, and extend it until it intersects the first line

4. Draw one last line from the point through the near-side focal point and then to the lens. From there, draw a line parallel to the optical axis. This line will intersect the other two at the point where they intersect each other.

:::Figure raytrace1 xl
![Example of a Ray Trace Diagram](imgs/Lab2/fig3_4.JPG "Example of a Ray Trace Diagram")

:::

There are two other important cases to consider. When an object is placed within the focal length of a convex lens, the image point becomes negative. A virtual image is formed at the point that the image *appears* to come from. The ray tracing method is consistent, but note that you draw the line in reverse:

:::Figure raytrace2 xl
![](imgs/Lab2/fig3_5.JPG "Caption 1")
:::

*Note:* As a convention, we always draw from the top-most point on the object. Any other point would work equally well. The top is generally most useful.

A concave lens has a negative focal length, and the line from the object to the focal length actually crosses the lens:

:::Figure raytrace3 xl
![](imgs/Lab2/fig3_6.JPG "Caption 1")
:::

Concave lenses do not cause light to converge upon a single point, but instead cause it to spread out. Because of this they are referred to as *diverging* lenses. The focal length of a concave lens is negative. Hence they are also sometimes called *negative* lenses. If we incorporate this detail into our ray tracing, we can analyze them by using the same method that we use for convex lenses. 

:::Figure raytrace4 xl
![Figure 7](imgs/Lab2/fig3_7.JPG "Caption 2")
:::

:::Definition (Real and Virtual Images)
For a **Real Image:**
- Light rays actually pass through the image point.
- The image is on the opposite side from the incident light.
- The image can be projected onto a screen.
- The image is inverted with respect to the object.

---

For a **Virtual Image:**
- Light only appears to pass through the image point.
- The image is on the same side as the incident light.
- The image cannot be projected onto a screen.
- The image is in the same orientation as the object; we say that it is erect.
:::

Image formation through a lens is exemplified in the dynamic [](#Simulation-Concave). You can change the location of the object as well as the focal length of the lens. You can do the latter by dragging the point labeled"Focus." You can switch from convex to concave by dragging the"Focus" point to the right of the lens. You will be using this simulation in both exercises that follow.



:::Simulation (Concave)
<a href="https://www.geogebra.org/material/iframe/id/vd77gpfr" target="_blank" rel="noopener noreferrer"> Open in New Tab</a> 
<iframe scrolling="no" title="Copy of Concave and Convex Lenses" src="https://www.geogebra.org/material/iframe/id/vd77gpfr" width="1033px" height="482px" style="border:0px;width:100%; height:500px;"> </iframe>
:::



In [](#Activity-rayt) you will practice ray tracing on a piece of paper. You are expected to photograph and attach your work.
::::::Activity (rayt|Ray Tracing Practice)

1. In this section you will practice the ray tracing method described above. Assume the focal length to be 2cm. Get a sheet 
of paper and draw the optical axis, measure out and draw the focal point and trace the outline of the convex lens. Pick 
an object point outside of the focal length on the top left-hand side of the paper. Draw the three simple case rays – 
parallel, through the lens center and through the focal point – and locate the image formed on the other side of the lens. 
Note that it is a) inverted, b) at a different distance than the object, and c) it is a different size than the object. Also note that 
the light rays converge at a given point, convex lenses are frequently referred to as converging lenses. 
2. Get another sheet of paper and repeat step 1), however instead draw the object point inside the focal length. Again 
draw the three simple case rays. Note that this is one of the special cases mentioned above, see Figure 3.5. 
:::Exercise
What do you observe? Do the lines converge at a given point? 
:::
3. Instead trace the rays backwards as shown in figure 3.5. You will find that they all intersect at a point on the same side 
as the object. 
When an object is inside of the focal length of a convex lens it no longer converges the light rays to a single point. The image 
is bigger, such a set up is called a magnifier. Since light does not actually pass through the point where the image is formed 
we call it a virtual image. 
4. Get a third sheet of paper and repeat the ray tracing procedure for the concave lens. Place the object outside of the 
focal length. Note that this is the second special case mentioned above, see Figure 3.6.
:::Exercise
Do the rays converge at a given point
:::
::::::
<!-- End of Exercise: Ray Tracing -->


In [](#Activity-rayt2) you will fill out two tables with the image location for various object locations in single-lens optical systems. You will explore all possible scenarios to fill out the tables below, and in this way fully characterize the behavior of convex and concave lenses.

::::::Activity (rayt2| Quantifying a Ray Trace Diagram)

 Use [](#Simulation-Concave) to explore the conditions in the tables below. Fill out the tables by using the [Table Templates](https://docs.google.com/spreadsheets/d/1Cvw8Ov_A9N4cCR9wG04k_4OWk2SzO5Wo7_48GxVOHCQ/edit?usp=sharing). Notice that the first case is filled out for you as an example.

:::Figure (LCT|xl)
![Lens Characteristics Table](imgs/Lab2/Table.JPG 'Lens Characteristics Table')
:::

:::Exercise
For the convex lens, describe with words what the conditions are for the image to be larger than the object, smaller than the object, and the same size as the object.
:::
5) Trace the rays backwards as shown in figure 3.6.
Question 3.3
For object distances outside the focal length, do concave lenses make things bigger or smaller?
Concave lenses do not cause light to converge upon a single point but instead cause it to spread out. Because of this they are 
referred to as diverging lenses. The focal length of a concave lens is negative. If we incorporate this into our ray tracing they 
can be analyzed using the same method that was used for convex lenses
::::::


:::Activity (telemicro|Telescopes and Microscopes)
Note: In the following procedure, you may have to adjust the starting positions to get good results.
1. Hold the 200mm lens in your left hand. 
2. Lock your elbow to give a full extension (Figure 4.1). 
3. Aim your arm with the 200mm lens at something across the room. 
4. Take the 100mm lens and hold it with your right hand. 
5. Place the 100mm lens, the eyepiece, right at the back of the 200mm lens, the objective lens (Figure 4.2). 
6. Using your right eye, slowly bring the eyepiece, in your right hand, toward your eye (Figure 4.3). 
7. Keep your eye, the eyepiece and the objective lens along the same axis pointed at your target. You should be able to capture a clear image of your target. You may find this easier if you shut your left eye.
:::Exercise
1. Does the object appear to be closer or farther from you? 
2. How much closer do you appear to be?
3. How much larger does the image appear to be? Explain in terms of the focal lengths of the 
objective and eyepiece. 
:::
This is an extremely basic telescope. The 200mm lens is used to form an inverted image, and the 100mm lens is used as a magnifier to make it look bigger. The 200mm lens is called the objective lens, the 100mm is called the eyepiece
8. Remove all the lenses except for the 200mm and 100mm lenses. Remove the Ray Table (round disc) from the Ray 
Table Base and place the Ray Table onto the lab table. Slide the Ray Table Base toward the 20 cm mark. Do not remove 
the Ray Table Base from the Optics Bench. Place the light box on the end of the optical bench, with a position of 
100cm. Orient it such that the target (crossed-arrows) is facing the rest of the bench toward the 0cm end. Place the 
200mm lens at 60cm and the 100cm lens at 10cm. Plug in the light box and view from approximately the 0cm mark. 
See Figure 4.4
:::Exercise
What do you observe
:::
::::::

# Conclusion

:::Exercise
Write a brief conclusion summarizing the important points of this lab.
:::  

:::Summary
Make sure to include all tables, plots, pictures, drawings, screenshots or anything else asked of you in the exercises in your report, as well as answers to all the questions.

All responses and answers should contain the correct number of sig figs and should include units when needed.
:::

<!-- Example Functions -->
<!--PhET Formatting ![Simulation 1](imgs/Lab2/Figure5_Nodes.jpg){width=100% height=600px} -->

<!-- Simulations

Sim 1

<iframe scrolling="no" title="InfiniteSourceTest" src="https://www.geogebra.org/material/iframe/id/v69nxnqu/width/700/height/444/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="1100px" height="600px" style="border:0px;"> </iframe>

Sim 2

<iframe scrolling="no" title="" src="https://www.geogebra.org/material/iframe/id/X8RuneVy/width/1033/height/482/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="1100px" height="600px" style="border:0px;"> </iframe>

Sim 3

<iframe scrolling="no" title="" src="https://www.geogebra.org/material/iframe/id/a2rNFfHA/width/1100/height/600/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="1100px" height="600px" style="border:0px;"> </iframe>
 -->




<!-- Sim 1 Old -->

<!-- [Simulation 1 Old](https://ricktu288.github.io/ray-optics/simulator/){width=100% height=600px} -->
<!-- No Longer Wanted -->
<!-- I cannot get this sim to stay in a window, Setting it up as an image does not work. Setting it up as a link forces you to another page. I have a saved file for it but I do not know how to get it to that, 6CL_Lab2_P1_Test.json. -->

<!-- Sim 1 Text
Simulation 1 shows how lenses act in two dimentions. There are 4 lenses already made with a light source similar to that of the lights in your laboratory. The three on the left are convex and the one on the right is concave. Move the convex lenses around to see how the light passing through them acts. Select a lens and measure the height at which this occurs using the ruler tool, then do the same for two other unlabeled convex lenses. -->

<!-- Sim 2 Old -->
<!-- ![Simulation 2](https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html?screens=2){width=100% height=600px} -->





<!-- Simulation 3 -->
<!-- <figure> -->
<!-- <div class="container" style="padding-bottom:56.25%:"> -->
<!-- <iframe scrolling="no" title="" src="https://www.geogebra.org/material/iframe/id/X8RuneVy/width/1033/height/482/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width=100% height="600px" style="border:0px;" allowfullscreen> </iframe> -->
