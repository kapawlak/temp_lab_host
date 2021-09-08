# Reflection and Refraction

::::::Intro (This Week)

This week we will investigate Reflection and Refraction. After a short review of the theory governing the reflection and refraction of light by surfaces and prisms, you will tackle a few "virtual" experiments by using simulations or interacting with videos.

The video below gives a brief review of important concepts in this lab
:::Video (intro| A Quick Lesson on Reflection and Refraction)
<iframe width='100%' height='100%' src="https://www.youtube.com/embed/CWOkuhY8Szo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

::::::

:::Prelab
Please complete the following:
:::

---

# Simple Reflection & Refraction
## The Index of Refraction and the Speed of Light
You might know that light travels in a vacuum at a speed $c=3.00 \times 10^8  \text{ m s}^{-1}$, but, perhaps surprisingly, it travels more slowly within any other medium or material. We define the **index of refraction**  of a material, denoted by $n$, to be the ratio of the speed of light in a vacuum to the speed of light in that medium.

:::Equation (IOR| Index of Refraction)
$$
n = \frac{c}{v}
$$
:::
where $c$ is the speed of light in a vacuum and $v$ is the speed of light in the medium. If you know the medium’s index of refraction, you know the speed of light in that medium.

The index of refraction, however, does more than just tell you the speed of light in a material — it will actually tell you some very important information about the precise path that the light takes in that material, too.

### Light Crossing Interfaces

The most interesting optical effects of materials often happen at their boundaries or **interfaces**. When a light ray encounters a boundary between two materials, it experiences a change in direction, which we call *refraction*. 

:::Definition (Interface)
An **interface** is a surface forming a common boundary of two bodies, spaces, or systems. For example, a full glass of water has a glass-air interface on the outside and bottom, a water-glass interface within the glass, and a water-air interface on the top.  
:::

The bending of the light at the interface is due to fact that light travels at different speeds in the two materials, any can be quantified simply in terms of the difference in the materials’ indexes of refraction. 


:::Figure (refrac|xl)
![The result of refraction at different angles of incidence.](imgs/ReflectionRefraction/fig1_1.jpg 'The result of refraction at different angles of incidence.')
 
:::

[](#Figure-refrac) above shows beams of light being emitted from the blue semicircle at the bottom left. There are some important features to observe:
- The rays travel through a medium having an index of refraction of $n_1$, toward the interface of that medium with a second medium having an index of refraction of $n_2$. 
- The beams in the lower region are the *incident* beams. 
- The beams in the upper region are the *refracted* beams. 
- When light reaches the interface, some of it is reflected back into the first medium, but most of it is refracted into the second medium. 
- Note that two of the exiting beams, B and C, are bent (*refracted*) away from the normal [fn]Ray D is also bent away from the normal, but represents a special case, which we will see later in this lab.[/fn]. 
- When a beam is perpendicular to the interface boundary, as is beam A, it is said to be *normal* to the interface. Normal rays are undeflected. 
  
 This figure could represent light coming from water and going into air. 

## Snell's Law
The refraction of light at the interface between two media with indexes of refraction $n_1$ and $n_2$ is described by Snell’s Law:

:::Equation (snell|Snell's Law)
$$
n_1\sin(\theta_1) = n_2\sin(\theta_2),
$$
:::
where $\theta_1$ is the angle of incidence and $\theta_2$ is the angle of refraction.

:::Note (|8 C)
All angles are measured from the *perpendicular to the interface* to the ray. Thus, a small angle means the ray is nearly perpendicular to the boundary, and a large angle means the ray is nearly tangent to the interface. Note that all angles are less than 90 ̊. 
:::

:::Note
The indexes of refraction are properties of the two mediums.
:::


:::Exercise
Look at [](#Figure-refrac) to answer the following:

1. Light ray A is normal to the interface.  What is the angle of incidence $\theta_1$ for this ray? According to Snell's law, what is the angle of refraction $\theta_2$? 

2. Is the angle of the refracted light beam B larger or smaller than the angle of incidence? What about light beam C? According to Snell's Law, what does the relative magnitude of the angles (*i.e.*, $\theta_2/\theta_1$) tell us about the relative magnitude of the indexes $n_1$ and $n_2$?

:::


:::Exercise (snell-rearranged)
In our experiment, we will want to calculate the index of refraction of a prism by measuring the angle of incidence and angle of refraction at the interface between the prism and air. Without loss of generality, assume that we are making these measurements such that the light is *leaving* the prism and *entering the air* at this interface.
1. Based on the interface we are studying, do you think $\theta_1$ or $\theta_2$ should be larger? Defend your answer
2. Starting from [](#Equation-snell), derive an expression that gives the value of $n_1$ in terms of $\theta_1$, $\theta_2$ and $n_2$  
3. Given that one of the interfaces is *air*, can you make a substitution in your answer to part (b) that simplifies your equation? If so, write the simpler equation. If not, explain why.
:::
## Critical angle and total internal reflection
When the angle of incidence reaches a certain value (ray D in [](#Figure-refrac)), light no longer gets refracted into the second medium; instead it is fully reflected back. The **critical angle** is the incident angle at which no light gets transmitted, but all the light is reflected back into the first medium.
The critical angle is the angle of incidence that corresponds to an angle of refraction of 90°. For any angle greater than the critical angle, *total internal reflection* occurs. A necessary condition for the critical angle to exist is that the index $n_1$ of the first medium has to be greater than the index $n_2$ of the second medium.

## Preparation for the Refraction Experiment

### Simulation of Reflection
Let's start by looking at a simulation of what happens when light interacts with a boundary in [](#Activity-boundary).

::::::Activity (boundary| Reflection at a Boundary)
In this exercise you will use a simulation to investigate what happens to light at a boundary.

:::Simulation
<iframe src="https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html?screens=1" width="100%" height="600" allowfullscreen="" frameborder="0"></iframe>
:::

1. The top material should already be set to "Air." Leave it as that. Change the bottom material to "Mystery B."

2. Turn on the laser by clicking the large red button. Click on the grey housing of the laser, and move it to a new angle.

3. Use the protractor tool to measure the new incident angle and refracted angle.

:::Exercise
1. What is the index of refraction for the material "Mystery B?" Show your work.

2. What is the speed of light in the "Mystery B" material? (Show your work.)
:::

::::::

### Preparing our Tables
::::::Activity (prelab-semicircular| Prepping for Data Collection)
1. Create a [Good Table](?linkfile=FAQ#part2) with 4 data rows and one AVERAGE row that has correct units and sigfigs, similar to [](#Table-semicirc)
:::Table (semicirc|Semi-Circular Acrylic Block Refraction Data)
| Angle of Incidence (u.) | Angle of Refraction (u.) | Measured $n$ |
|-------------------------|--------------------------|--------------|
| ...                     | ...                      | ...          |
| ...                     | ...                      | ...          |
| ...                     | ...                      | ...          |
| ...                     | ...                      | ...          |
|  | AVERAGE:| ...|
:::
2. Insert spreadsheet functions into your Measured $n$ column so that the index of refraction is automatically calculated. This will be the equation you derived in [](Exercise-snell-rearranged)

:::Exercise
Link a copy of this table into your lab notebook so that your TA can check it before class.
:::
::::::

# Refraction and Reflection Experiment
:::Materials (Ray Box|Ray Table|Semi-Circular Acrylic block)
:::

In this experiment we will use an optical bench and a semi-circular acrylic block with an unknown index of refraction. Our objective is to find its index of refraction. In [](#Activity-semi-circular), $n_1$ corresponds to the plastic block, $n_2$ corresponds to the air. Measuring
both the incident and refracted angles and assuming the index of refraction for air to be $n_2$ = 1.00 we are left with only one
unknown, the index of refraction for the plastic, $n_1$. We neglect the first boundary between air and the acrylic block because
the incident beam is perpendicular to the cylinder’s surface.



::::::::Activity (semi-circular| Refraction in a Semi-circular Acrylic)
Once you have gathered your materials, proceed with the instructions below.

**Instructions:**

1. Adjust the ray box to provide one beam of light. 
2. Place the semi-circular plastic block in the middle of the ray tracing table. Align it with the table’s axis so that it is easy to measure the incident and refracted angles:  you can then rotate the table rather than the block. 
3. Measure and record four different angles of incidence and their respective angles of refraction. Be sure your choices of the incident angles produce a reasonable span of values ;;;Hint: A selection of values, ranging from 5° to 8°, would not be a reasonable span;;;
:::Figure (semicir|xl)
![](imgs/ReflectionRefraction/semicircular.png 'Schemiatic of light refracting through a semi-circular prism. The angle of incidence, $\theta_1$, is the angle from the normal on the interior of the prism, and the angle of refraction, $theta_2$, is the angle that the light leaves, with respect to the exterior normal.')
:::

:::Exercise
1. Present a copy of your final table here.
2. What is the average index of refraction,$\bar n$, for the acrylic block?
:::

4. The critical angle is the breaking point between refraction and total internal reflection (where no light is refracted, it
is all reflected. Find this angle.
:::Note (|10 C)
 At the critical angle, the refracted light travels along the surface of the plastic block. Thus, $\sin(\theta_2) = 1.0$, or $\theta_2 = 90$ ̊. Plug this into Snell’s law and compute $n_c$.
:::
:::Exercise
1. What is the critical angle you found?
2. What is the index of refraction calculated from this value (call this $n_c$)
3. Does this value agree with your previous calculations? By how many percent is it off? Comment
on the number of data points in each case and why one experiment might be preferred.
:::
5.  Observe the reflected angle when the incident light is past the critical angle.
At angles beyond the critical angle no light is transmitted into the air or along the surface of the block. This phenomenon
is called total internal reflection.
:::Exercise
1. What is the speed of light in the acrylic block calculated from $\bar n$?
2. What is the speed of light in the acrylic block, calculated from $n_c$?
3. What is the percent difference  of these two results?
4. Which result do you think is more accurate? Explain.
:::
::::::Note (|10 C)
Recall that the equation for percent difference is the following:

:::Equation

$$
\text{percent difference} = \frac{| \text{value 1} - \text{value 2}|}{average} 
$$
:::

Where the average is given by:

$$
\text{average} = \frac{\text{value 1} + \text{value 2}}{2}
$$

::::::
:::::::::






# Prisms & Frequency-Dependent Refraction
## Theory
::::::Figure (freqdep|m|R)


![Frequency-dependent index of refraction for glass, quartz, and diamond](imgs/ReflectionRefraction/fig2_1.jpg "Frequency-dependent index of refraction for glass, quartz, and diamond")



![Scatter Plot of above data.](imgs/ReflectionRefraction/fig2_1_graph.jpg "Scatter Plot of above data.")




::::::
The index of refraction for a medium is dependent upon the frequency of the light; blue light has a different index of refraction from that of red light for a given medium.

1. The angle at which a beam of light is refracted when traveling between two mediums is dependent upon their indexes of refraction.

2. The indexes of refraction are typically frequency dependent for a given medium. A medium will refract one color more (or less) than another color.

3. White light is made of many constituent colors.

Piecing these statements together, we have a tidy explanation for the phenomenon of a rainbow. At each boundary, some colors are refracted more than others, which results in white light being spread out into its constituent spectrum. This spreading is called dispersion. The second boundary of the prism – plastic to air – is at such an angle as to increase this dispersion. The difference between the index of refraction for the lowest frequency and the highest frequency determines how wide a rainbow you can see. A material with a larger spread in indexes will give a wider rainbow.



:::Exercise
A beam of white light traveling in air is incident on a glass block at an angle of 17 degrees. Use Snell’s Law to compute the refracted angle for purple, green and orange light.
:::

## Experiment
In [](#Activity-white), you will investigate what happens when the path of white light passing through the D-block is close to the critical angle. You will use your knowledge of Frequency-Dependent Refraction to describe what is happening.

::::::Activity white

In this video you will see what happens when we refract white light. Recall that white light is composed of many different frequencies (colors) of light.

<!-- Dispersion -->
:::Video

<iframe width='100%' height='100%' src="https://www.youtube.com/embed/RXb3OZu0NRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::


:::Exercise
In the video, the clearest rainbow is observed when the light is close to the critical angle. Why is the critical angle ideal for observing the rainbow? 
;;; Hint: How does dispersion change with increasing the incident angle? What happens to refracted light past the critical angle?;;;

:::

::::::


# Reflection from Plane Mirrors


We regularly encounter flat mirrors, as well as glass surfaces that act like mirrors. Intuitively you know that your image is standing directly across from you. When we speak in terms of ray tracing, we are the *object* and our reflection is the *image*. It is easy to convince yourself that this image is formed straight back – that is, on a line normal to the plane of the mirror – and that it is also an equal distance behind the mirror.

The image of any point object in a plane mirror is simply the point straight across at an equal distance. This is the case for any viewing angle; you will see the image “behind” the mirror at an equal distance. The line between the object and image is always normal to the plane of the mirror.



:::Figure (raytrace|xl)
![Simple ray tracing with a single planar mirror.](imgs/ReflectionRefraction/fig3_1.jpg "Simple ray tracing with a single planar mirror.")
:::

Now let's consider why ray tracing works. The law of reflection tells us that the angle of incidence is always equal to the angle of reflection. We also know that the image is formed by the light ray that emanates from the object, reflects off the mirror, and finally reaches our eye. The ray that reaches our eye must obey the law of reflection; its path is shown in [](#Figure-raytrace). It is important to note that this would work equally well for any set of angles. We see an image behind the mirror because of the law of reflection; if you extended the reflected light ray behind the mirror, it would arrive precisely at the image point as in [](#Figure-raytrace). The phenomenon of reflection fools us into thinking that the light rays originate from the image point.


::::::Activity

Here we will show you how to set up a ray tracing for a plane mirror. In the video we are looking down onto the top edge of a flat mirror that is oriented perpendicular to the plane of your screen. The red pin that is placed will be the object. We will use yellow pins to mark the reflected rays. 

The goal of this exercise is to trace the path that light takes from the object pin, off the mirror, and to your eye, on the paper on the left side of the screen. Then we will remove the mirror, and trace those rays to the right side of the screen, behind the mirror, to find the location of the image that we are seeing.

<!-- Plane Mirror Ray Trace -->
:::Video
<iframe width='100%' height='100%' src="https://www.youtube.com/embed/xQlytH6o7DU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

Now you have seen a video of the all of the rays being marked. What's left to do is to trace the points into a diagram. Depending on what materials you have available, you can choose from one of the following two methods:

## Method 1: Using Geogebra
Below is a link to an image paper that was created in the video. You will take that image and perform a ray trace.



1. Take [this image](imgs/ReflectionRefraction/geogebra.png) and go to the website [GeoGebra (click this link to go to the started ray trace)](https://www.geogebra.org/geometry/n6jx7jug)

2. For a guide on how to use the tools in GeoGebra and perform the ray trace, watch the video below.

<!-- GeoGebra Introduction -->
:::Video
<iframe width='100%' height='100%' src="https://www.youtube.com/embed/2o2RKRxyILY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

3. Make sure to measure the incident and reflected angles for both rays.

4. Also include the distance from the object to the mirror and the image to the mirror.

5. Take a screenshot of your ray tracing and include it in your lab report.


## Method 2: Printing/Tracing and using a protractor
In this version, you will either print or trace the image and use a protractor to measure the ray tracing angles
1. Either print or trace [this image](imgs/ReflectionRefraction/geogebra.png) onto a sheet of paper. If tracing, hold a sheet of paper over your screen and gently trace the markings with a pencil. DO NOT APPLY PRESSURE to your screen. If needed, go over the markings a second time on your table.
2. Complete the ray tracing by hand using a ruler.
3. Measure the angles with a protractor. Make sure to measure the incident and reflected angles for both rays. If you do not own a protractor you may print or trace [this one](imgs/ReflectionRefraction/protractor.gif). Alternatively, you can hold the paper with your ray tracing up to the screen, over the protractor image, to measure the angles.

4. Also include the distance from the object to the mirror and the image to the mirror, which you  may find by using a ruler.

5. Take a picture/scan of your ray tracing and include it in your lab report.

:::Exercise
How does the object distance compare to the image distance? In ideal conditions, how should they compare?
:::

:::Exercise
What are the angles of incidence and reflection for each of the rays? How should they be related?
:::

:::Exercise
What could be the reasons for errors in the two questions above?
:::


::::::

# Conclusion

:::Exercise
Write a brief conclusion summarizing the important points of this lab.
:::

:::Summary

You are expected to turn in all plots and tables you are asked to make in the exercises, as well as all answers to questions

:::


