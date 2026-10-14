#include "stm32f4xx.h"


#include <stdio.h>

void LED_init();

void delay(long int a)      #### Delay for on and off purpose
{
long int b,c;
for(b=0;b<a;b++)
for(c=0;c<a;c++);
}

void main()
{

LED_init();
while(1)
{
GPIOF->ODR =0x0000000F;     #### Output data register = 
ODR
delay(3000);
GPIOF->ODR =0x00000000;
delay(3000);
}
}

void LED_init()
{
RCC->AHB1ENR = 1 << 5;        ### Peripheral clock enable register ---> Reset and clock control ----> It enables the clock to the GPIO pins, GPIO F enables.-
GPIOF->MODER = 0x55555555;    #### Mode selection, which is here Output mode
GPIOF->OTYPER =0x00000000;     #### Type selection push pull mode
GPIOF->OSPEEDR =0xAAAAAAAA;     #### for speed here high speed
GPIOF->PUPDR =0x00000000;       #### pull up, pull down, no pull mode selection here
}

