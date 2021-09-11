# A Light Refresher Lab 


:::Intro (Welcome to PHYS6CL!| Microwave | Meltable Foodstuffs --- Pasta, Chocolate, or Melting Cheese| Ruler|Microwave-Safe Plate --- Please make sure that your plate explicitly says this)
Welcome back to the 6-series laboratory course. For our refresher lab, we will perform a quick home experiment to measure a fundamental property of light — its speed through space — using pasta. Yes, *pasta* [fn] or chocolate or cheese [/fn]

While the measurement of the speed of light is interesting, and will hopefully give you a tangible sense of some of the topics discussed in the accompanying lecture course, we will also embark on some new experimental skill sets. This quarter, we will think carefully about finding accepted values, citing them, and comparing our results to them. 
:::

# The Wave Nature of Light 
Electric and Magnetic fields permeate the entirety of the universe, accounting for most of our day-to-day experiences. As you are learning in lecture, an simultaneous excitation of both of these fields (in accordance with Maxwell's equations) produces an *Electromagnetic Wave*. This wave, simply put, is light. Like more familiar kinds of waves, like the ones in water or on a slinky, they can be characterized by their amplitude and wavelength. Unlike their mechanical and fluid counterparts, however, they have a set speed that they can travel through the vacuum *regardless of frequency or wavelength*. 

We call this speed, $c$, the *speed of light*. It has a very rigid and useful relationship to wavelength, $\lambda$ and frequency, $\nu$.

:::Equation (c)
$$
c =  \nu \lambda 
$$
:::

This simple equation gives us something important: 

:::center
*If we know $\nu$ and $\lambda$, we can directly calculate $c$.*
:::

Ultimately, we will use the wave nature of light to measure the speed of light indirectly. The problem we face now is finding a light source with known or *measurable* $\lambda$ and $\nu$. Most of the light we usually think of has a $\lambda$ in the visible spectrum, ranging from $400 \text{ nm}$ to $700 \text{ nm}$, which is probably a lot smaller than we can see (without the aid of some kind of  [electron microscope](https://en.wikipedia.org/wiki/Electron_microscope) [fn] Not suprisingly, you can't use visible light to investigate things on the scale of visible light![/fn]). Luckily for us, light exists at all sizes and scales, to the best of our knowledge, and some of the most useful forms of light have wavelengths on the orders of centimeters to kilometers.




## A Kitchen Light Source

Microwave ovens use microwaves, which -- you guessed it -- are simply ordinary light with a relatively large wavelength (compared to &ldquo;visible&rdquo; light, that is). Most microwaves operate in the $2.45 \text{  GHz}$ frequency band, as this band is the most efficient at exciting rotations of water molecules in food.

Since we know the frequency, $\nu = 2.45$ GHz, if we are able to determine the *wavelength*, $\lambda$, of the signal, we can find the speed of light by using [](#Equation-c). [fn]Take a look at Freedman Example 22-1 for a related exercise using FM radio waves[/fn]


When a microwave is powered, it produces standing waves across the cooking chamber. We can use the resulting pattern to measure the wavelength of the light by placing a medium in the microwave, with the rotating platform removed, and noticing how it heats up unevenly.


:::::::::Figure (micro|m|Row)
::::::row
:::col
![](imgs/Refresher/m1.png 'A microwave oven works by producing microwaves in a device called a magnetron, that leave from a hole adjacent to it (typically on the the right). The microwaves will reflect back and forth from the two sides of the metal oven.')
:::
:::col
![](imgs/Refresher/m2.png ' The wavelength of the microwaves is tuned to produce a standing wave. This is where you get two waves, one going in each direction, which interact to make some areas where there is a huge vibration and others where there is none.')
:::
:::col
![](imgs/Refresher/m3.png 'This means that there are places where the microwaves are very intense, where the molecules will be vibrated very powerfully, and so heated strongly, and others where the microwaves are weak.  These areas are separated by half a wavelength.')
:::
::::::
######
**Because of the standing waves, modern microwave ovens contain turntables. Otherwise parts of your food would be overcooked and others would still be raw.**
:::::::::

######

The question we have to ask now is: 
:::center
*How can we infer the wavelength of the microwaves by using household objects?*
:::
The answer is quite simple, actually! Since the microwaves deposit *energy* into water molecules, and that energy depends on the amplitude of the wave at that point, we can look for the first signs of "cooking" in the medium -- places where the wave amplitude is highest will heat faster than the surrounding region. Hence, the cooked regions represent the *antinodes* of the microwaves, and raw regions are near *nodes*. 


Since we are finding distance between the locations of the antinodes, $d$, our measured distances will represent *half* of our wavelength, $\lambda$.



::: Exercise
Why is the distance between the food medium and the magnetron not important to the determination of $c$ in this experiment?
:::

::: Exercise
 Write the equation to calculate $c$ in terms of $d$ rather than $\lambda$.
:::



# Measuring the Speed of Light


## Before the Experiment
Before performing an experiment, it is always a good idea to work out your expectation and  

##
::: Materials (Microwave | Meltable Foodstuffs --- Pasta, Chocolate, or Melting Cheese| Ruler|Microwave-Safe Plate --- Please make sure that your plate explicitly says this)
:::

::::::Activity


:::Figure (tested|xl)
![](imgs/Refresher/choc.jpg)

 We tested a number of possible food items to use, and found that using dry pasta that was briefly put under running water to moisten it worked best.
:::
1. Remove the rotating table from your microwave. You may need to place a microwave-safe cup or bowl upside down over the turning gear.
2. Place your medium on the microwave-safe plate.
3. Set the plate in the microwave and turn it on for 10- to 30-second intervals, until you see at least two spots that are melting/cooked
4. Measure the distance between the centers of these two spots.


:::Figure pasta xl
![](imgs/Refresher/pasta.jpg)

Do your best to measure from the center of the cooked region. Be sure to estimate your measurement error, so that you will be able to determine the precision of your result!
:::

:::Exercise
1. What is the distance between the centers of your cooked regions, $d$? 
2. Estimate the uncertainty in this measurement, e.g. what are the largest and smallest values you'd expect to get if you were to measure this distance multiple times? Write your final answer as $(d \pm \delta d)$ as usual.
3. Calculate the measured value and error of the speed of light using your results. Write your final answer as $(c \pm \delta c)$ as usual Recall that for a product $A =XY$, the formula for error is given by:
$$
\frac{\delta A}{A} =  \sqrt{ \Big(\frac{\delta X}{X}\Big)^2 + \Big(\frac{\delta Y}{Y}\Big)^2}
$$
:::
::::::

:::Exercise
1. What is the *discrepancy* between your result and the accepted value of $c$?
2. Is the discrepancy within the error bounds, $\delta c$ you calculated?
3. Based on your answer to the above, do you think your measurement agrees with the accepted value of $c$? Why or why not?
4. Are there any sources of systematic error (e.g. irregularities in food moisture, dirty microwave walls, other things that may affect microwave amplitude distribution) that may have affected your results? Give details about these possible sources and how they might affect your result.
:::


::: Exercise
1. Roughly measure the length of the inside your microwave in cm. 
2. Is it close to a multiple of $d$?
3. Give an argument as to why microwaves typically come in only a few standard sizes. 
4. What do you think the function of the mesh on the viewing screen of your microwave is?
:::

:::Summary

Make sure to include all tables, plots, pictures, drawings, screenshots or anything else asked of you in the exercises in your report, as well as answers to all the questions.

:::
