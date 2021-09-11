# Reflection and Refraction

::::::Intro (This Week)

This week we will investigate Reflection and Refraction. After a short review of the theory governing the reflection and refraction of light by surfaces and prisms, you will tackle a few experiments that demonstrate each concept:
- Refraction of light through an acrylic block
- The dispersion of light through a prism
- The reflection of light from plane mirrors
- The reflection of light from spherical mirrors

The video below gives a brief review of important concepts in this lab
:::Video (intro| A Quick Lesson on Reflection and Refraction)
<iframe width='100%' height='100%' src="https://www.youtube.com/embed/CWOkuhY8Szo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

::::::

::::::Prelab
Please complete the following:
:::center
[](Exercise-1), [](Exercise-snell-rearranged), [](Exercise-find), [](Exercise-Table1), [](#Exercise-whitelight)
:::

::::::

---

# Refraction 

:::Figure (pen|l|R)
!['A pen partially submerged in a bowl of water appears bent due to refraction at the water surface.'](imgs/ReflectionRefraction/pen.jpg "This pen appears bent due to the refraction of light at the water-air interface. Water has a higher index of refraction than air, so when the light exits the water, it travels at a lesser angle in air, leading to the vertical squeezing of the pen's image")
:::

While we may see the visual effects of refraction on a daily basis — think rainbows, distorted images on ocean-sprayed smart phones, or the paper straw that appears to bend where the air meets your drink —  most of us haven't investigated it in a scientific setting. In the first experiment of this lab, we will try to understand, *quantitatively*, the physical effects of refraction. By the end of this experiment, we should be able to confidently relate the **indexes of refraction** of two materials sharing a boundary to the physical changes in a ray of light — such as the angle it travels through space, the speed the ray propagates at.

The next few sections prepare you for this experiment by reviewing the theory of refraction. In these sections you will practice some calculations and prepare equations and tables for the experiment.

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
![The result of refraction at different angles of incidence.](imgs/ReflectionRefraction/fig1_1.jpg 'The result of refraction across the blue-yellow interface at different angles of incidence.')
 
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
## The Critical Angle and Total Internal Reflection
When the angle of incidence reaches a certain value (ray D in [](#Figure-refrac)), light no longer gets refracted into the second medium; instead it is fully reflected back. The **critical angle** is the incident angle at which no light gets transmitted, but all the light is reflected back into the first medium.

:::Definition (Critical Angle)
 The **critical angle** is the *greatest* angle at which a ray of light, travelling in one transparent medium, can strike the interface between that medium and a second of *lower refractive index* without being totally reflected within the first medium.
:::

The critical angle is the angle of incidence that corresponds to an angle of refraction of 90°. For any angle greater than the critical angle, *total internal reflection* occurs. A necessary condition for the critical angle to exist is that the index $n_1$ of the first medium has to be greater than the index $n_2$ of the second medium.

::::::Simulation (mystery_critical)
:::center
If the simulation does not load, right click and reload frame or [click here](https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html?screens=1) to launch it in the browser
:::
<iframe src="https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html?screens=1" width="100%" height="600px" allowfullscreen="1" frameborder="0"></iframe>
::::::

:::Quiz (refract_critical| About 0°--- Go back and reread Part I |About 25° --- Correct! The refracted beam disappears around 25°| About 45° --- Careful! You found the place where the incident and reflected beams have 90° separation, not where the angle of refraction is 90° | 90°--- Go back and reread Part I )
Open [](#Simulation-mystery_critical). Set the upper material to Mystery A and the lower material to air. Moving around the laser pointer, and using the protractor provided, what is the critical angle? 
:::

:::Exercise (find)
Change the top material to air and the bottom material to Mystery B in [](#Simulation-mystery_critical).
1. Using any angle of incidence you'd like, calculate index of refraction, $n$ for the material "Mystery B?" Show your work.
2. Now swap the  materials so that the top is "Mystery B" and the bottom is air. What is the critical angle? ;;;The simulation is hard to get just right — give your best guess at the lower bound;;;
3. Calculate $n$ using the critical angle you found.
4. Do you think that these values agree?
5. What is the speed of light in the "Mystery B" material? ;;;Use the measurement of n you think is more accurate. Show your work;;;
:::
## Preparation for the Refraction Experiment
The purpose of our refraction experiment can be summarized in a few points:
1. Through Snell's Law, can we accurately and empirically determine the property of a material — it's index of refraction, $n$ — from simple geometric measurements of light rays?
2. Does the determination of $n$ also agree with the value obtained by finding the critical angle?
3. In the context of this experiment, is one measurement of $n$ more accurate? More precise?

In our refraction experiment, we will use a semi-circular acrylic block as our first medium and air as our second medium; in other words, we will be looking at the angle of refraction in air from a beam of light incident on the acrylic side. Below is a summary of the procedure that you should read.


::::::Hider (|Procedure Summary)
You will have a Ray Box, a Ray Table with degree markings, the acrylic block and an optics bench to connect them to.
:::Figure (setup|m|R)
![](imgs/ReflectionRefraction/setup.png 'Your setup will look similar to this')
:::
1. Aligning the center of the block to the origin of the circular ray table and on the light source.
2. Rotate the table until light is entering through the curved end of the block.
3. Record the angle of incidence and the angle of refraction for this configuration.
4. Repeat 2-3 for at least three more angles
5. Rotate the table until you find the critical angle and record this value.
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

:::Exercise (table1)
Link a copy of this table into your lab notebook so that your TA can check it before class.
:::
::::::

# Prisms
::::::Figure (freqdep|m|R)
![Frequency-dependent index of refraction for glass, quartz, and diamond](imgs/ReflectionRefraction/fig2_1.jpg "Frequency-dependent index of refraction for glass, quartz, and diamond")
![Scatter Plot of above data.](imgs/ReflectionRefraction/fig2_1_graph.jpg "Scatter Plot of above data.")
::::::
The index of refraction for a medium is dependent upon the frequency of the light; blue light has a different index of refraction from that of red light for a given medium.

1. The angle at which a beam of light is refracted when traveling between two mediums is dependent upon their indexes of refraction.

2. The indexes of refraction are typically frequency dependent for a given medium. A medium will refract one color more (or less) than another color.

3. White light is made of many constituent colors.

Piecing these statements together, we have a tidy explanation for the phenomenon of a rainbow. At each boundary, some colors are refracted more than others, which results in white light being spread out into its constituent spectrum. This spreading is called dispersion. The second boundary of the prism – plastic to air – is at such an angle as to increase this dispersion. The difference between the index of refraction for the lowest frequency and the highest frequency determines how wide a rainbow you can see. A material with a larger spread in indexes will give a wider rainbow.



:::Exercise (whitelight)
A beam of white light traveling in air is incident on a glass block at an angle of 17 degrees. Use Snell’s Law to compute the refracted angle for purple, green and orange light.
:::

# Reflection


We regularly encounter flat mirrors, as well as glass surfaces that act like mirrors. Intuitively you know that your image is standing directly across from you. When we speak in terms of ray tracing, we are the *object* and our reflection is the *image*. It is easy to convince yourself that this image is formed straight back – that is, on a line normal to the plane of the mirror – and that it is also an equal distance behind the mirror.

The image of any point object in a plane mirror is simply the point straight across at an equal distance. This is the case for any viewing angle; you will see the image “behind” the mirror at an equal distance. The line between the object and image is always normal to the plane of the mirror.



:::Figure (raytrace|xl)
![Simple ray tracing with a single planar mirror.](imgs/ReflectionRefraction/fig3_1.jpg "Simple ray tracing with a single planar mirror.")
:::

Now let's consider why ray tracing works. The law of reflection tells us that the angle of incidence is always equal to the angle of reflection. We also know that the image is formed by the light ray that emanates from the object, reflects off the mirror, and finally reaches our eye. The ray that reaches our eye must obey the law of reflection; its path is shown in [](#Figure-raytrace). It is important to note that this would work equally well for any set of angles. We see an image behind the mirror because of the law of reflection; if you extended the reflected light ray behind the mirror, it would arrive precisely at the image point as in [](#Figure-raytrace). The phenomenon of reflection fools us into thinking that the light rays originate from the image point.




:::Exercise
Why is it important to place all pins as vertically as possible?
:::




# The Experiments
## Refraction Experiment
:::Materials (Ray Box|Ray Tracing Table|Semi-Circular Acrylic block)
:::

In this experiment we will use an optical bench and a semi-circular acrylic block with an unknown index of refraction. Our objective is to find its index of refraction. In [](#Activity-semi-circular), $n_1$ corresponds to the plastic block, $n_2$ corresponds to the air. Measuring
both the incident and refracted angles and assuming the index of refraction for air to be $n_2$ = 1.00 we are left with only one
unknown, the index of refraction for the plastic, $n_1$. We neglect the first boundary between air and the acrylic block because
the incident beam is perpendicular to the cylinder’s surface.



::::::::Activity (semi-circular| Refraction in a Semi-circular Acrylic|Optics Bench)
Once you have gathered your materials, proceed with the instructions below.

**Instructions:**

1. Adjust the ray box to provide one beam of light. 
2. Place the semi-circular plastic block in the middle of the ray tracing table. Align it with the table’s axis so that it is easy to measure the incident and refracted angles. You will rotate the table rather than the block. 
3. Measure and record four different angles of incidence and their respective angles of refraction. Be sure your choices of the incident angles produce a reasonable span of values ;;;Hint: A selection of values, ranging from 5° to 8°, would not be a reasonable span;;;
:::Figure (semicir|xl)
![](imgs/ReflectionRefraction/semicircular.png 'Schemiatic of light refracting through a semi-circular prism. The angle of incidence, $\theta_1$, is the angle from the normal on the interior of the prism, and the angle of refraction, $theta_2$, is the angle that the light leaves, with respect to the exterior normal.')
:::


1. The critical angle is the breaking point between refraction and total internal reflection (where no light is refracted, it
is all reflected. Find this angle and record it.


5.  Observe the reflected angle when the incident light is past the critical angle.
:::Note (|10 C)
At angles beyond the critical angle no light is transmitted into the air or along the surface of the block. This phenomenon
is called total internal reflection.
:::

:::Exercise
1. Present a copy of your final table here.
2. What is the average index of refraction,$\bar n$, for the acrylic block?
3. What is the critical angle you found?
4. What is the index of refraction calculated from this value (call this $n_c$)
:::

:::::::::

### Analysis of the Refraction Experiment
:::Exercise
1. What is the percent difference between your two results, $n_c$ and $\bar n$?
2. Which result do you think is more accurate? Explain. ;;;You may want to look up an accepted value for n in acrylic!;;;
3. Which result do you think is more precise? Explain.
4. Calculate the speed of light in the block for both $\bar n$ and $n_c$. 
5. By what percent does light slow down in the block?
:::

::::::Note (|10 C)
Recall that the equation for percent difference is the following:

$$
\text{percent difference} = \frac{| \text{value 1} - \text{value 2}|}{average} 
$$

::::::



## Prisms Experiment
:::Materials (Ray Box|Ray Tracing Table|Triangular Acrylic block)
:::
In [](#Activity-white), you will investigate what happens when the path of white light passing through the D-block is close to the critical angle. You will use your knowledge of Frequency-Dependent Refraction to describe what is happening.

::::::Activity (white|White light through a Prism)

:::Figure (prism-top|)
![](imgs/ReflectionRefraction/prismtopview.png)
:::
1. Adjust the light source’s grating to emit just one light beam and attach the ray tracing table to the optical bench. You are
provided with an oddly shaped block, use the triangular end of the block as a prism.

2. Shine the beam of white light through one side of the prism (yellow arrow) and observe the light output on the opposite
side. 

3. Begin with the angle of incidence close to normal and then sweep to a grazing angle.

4. Try to get the light to pass directly through the prism with no change in direction or offset.

:::Exercise
1. Sketch the orientation of the block when the rainbow is most observable, and attach the image to your report. 
2. Why do you think this is?;;;Hint: Is the refraction greater at grazing or normal angles? White light goes in, what comes out?;;;
3. Is it possible to get light directly through a prism? Why do you think this is?
:::

5. Now use the square end of the block. Shine the beam of white light at an angle other than normal and such that the beam is
able to leave through the opposite side (see green arrow in figure above).

:::Exercise
1. What do you observe about the beam on the opposite side of the block? Is the beam able to
pass straight through or is there an offset? Is it parallel to the original beam? Why?

2. When the incident beam is normal to the surface are you able to observe the same phenomenon?
At steep angles you will observe total internal reflection just as you did with the acrylic block. Mess around with the block
and prism to see the many possible geometric paths. 
:::

::::::


## Reflection Experiments 

### Plane Mirror Reflection
:::Materials (Corkboard|Pins---At least two yellow pins and one non-yellow pin|Plane Mirror|Paper|Ruler)
:::
::::::::::::Activity (flat-mirror|Flat Mirrors)

:::::::::Figure (mirror-setup|xl)
![](img/../imgs/ReflectionRefraction/onepin.png 'The setup as it looks with a single pin placed. Be sure to mark the line that represents the reflecting edge of the mirror.')
:::::::::

1. Set a clean piece of paper on the cork side of the of the corkboard and place the mirror assembly onto the corkboard as
shown in [](#Figure-mirror-setup).
:::Note (|10 C)
The mirror is a second surface mirror, the light actually reflects from the surface behind the clear protective plastic.
:::
2. Place a mark on the paper to locate the reflective surface. Do this at both corners of the mirror (see Figure 4.1).
Remove the mirror and draw a solid line connecting the two marks.
3. Replace the mirror to its previous position making sure that the line is still located at the reflective surface.
4. Place a non-yellow pin 6-10 cm from the surface of the mirror, slightly off to one side. This will be the object pin.
**Place the pin as vertically as possible.** Mark this location with an “O.”  [](#Figure-mirror-setup) shows an example.

:::::::::Figure (mirror-setup-2|m|R)

![](img/../imgs/ReflectionRefraction/twopin.png 'The setup as it looks with the original and single yellow pin placed. ')

![](img/../imgs/ReflectionRefraction/pinsaligned.png 'An example of what you will see during the alignment step.')
![](img/../imgs/ReflectionRefraction/reflectedandlabeled.png 'A complete example')
![](img/../imgs/ReflectionRefraction/finalresultonepath.png 'An example of solid and dashed lines on a single set of pins.')

:::::::::
5. Select two yellow pins. Place one of those pins anywhere, approximately 1–2 cm in front of the mirror on either side of the object (non-yellow) pin. 
6. Closing one eye, find the position where the head of the one physical yellow pin and the head of the one “virtual” object pin (non-yellow) overlap (coincide). Place the remaining yellow pin in a location such that its head coincides with the other heads. That is, it is in the same line with the first physical pin and the virtual object pin image. See [](#Fi-mirror-setup-2). The two yellow pins you just inserted now define the reflected light ray. 
7. Precisely mark the location of the ray pins (yellows), each with an “A.” Then remove the yellow pins.
8. Repeat step 5 one more time from a different viewing angle. Mark the location of these pins each with a “B.”
9. Once you have marked the locations of reflected rays, remove the mirror. For each pair of marks draw a solid line
through the two pin holes to the surface of the mirror. Draw another line from the location of the object pin to the
intersection of the mirror surface and the line you just drew. Mark the direction of light—from the object pin, to the
mirror, and finally to your eye—with arrows on these lines.



1.  Extend the line created with the original two pins behind the mirror, making it a dashed line. Repeat this process for the other sets of pins.
2.  Now construct a line from the object to the image. Measure the distance from the mirror surface to the object and
then from the mirror surface to the image location.
12.  Construct a perpendicular line at the point where each of the rays intersects the mirror surface (the line at the back
edge of the mirror). Measure the angle of incidence and angle of reflection. Neatly tabulate your results for each ray.

:::Exercise
1. Where do the dashed lines meet?
2. How does the perpendicular distance from the object pin to the reflection line compare with the distance from the image to that line?
3. What can you say about the angle of incidence and angle of reflection for each of the rays?
:::



::::::::::::

### Spherical Mirror Reflection
:::Materials (Spherical Mirrors---Concave and Convex|Pins---At least two yellow pins and one non-yellow pin|Plane Mirror|Paper|Ruler)
:::
::::::Activity (spherical| Spherical Mirrors)
1. Hold the concave spherical mirror mounted in black plastic holder approximately 1cm from your eye.
:::Exercise
1. What do you observe? 
2. What orientation is the image? 
3. By approximately what factor has the image been magnified? ;;;Remember that magnification, as the term is used in optics, can mean bigger or smaller. For bigger, the magnification is greater than 1.0. For smaller, the magnification is less than 1.0;;;
:::

2. Slowly move the mirror away from you. You will notice that there is a point where it becomes difficult to discern any type of
image. You are approximately at the focal point of the mirror when this happens. Continue moving the mirror away from you.

:::Exercise
1. What do you observe? 
2. What orientation is the image at this distance? 
3. How large is the image?
4. What happens as you continue to move the mirror away from you?
:::
::::::

# Conclusion

:::Exercise
Write a brief conclusion summarizing the important points of this lab.
:::

:::Summary

You are expected to turn in all plots and tables you are asked to make in the exercises, as well as all answers to questions

:::


