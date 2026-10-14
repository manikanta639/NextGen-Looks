#include "stm32f4xx.h"


 void delay()
  {
   for(int i=0;i<0x3FF;i++)
     for(int j=0;j<0x3FF;j++);     // outerloop runs for 1023 i:e; from 0--->1022, and inner loop runs for 1023> totally 1023*1023=  1 million loops
  }

 void mx_pinout_config(void) 
  {
    RCC_AHB1PeriphClockCmd(RCC_AHB1Periph_GPIOF|RCC_AHB1Periph_GPIOG, ENABLE);
    RCC->AHB1ENR |= 1<<5 |1<<6;
    GPIOF->MODER   = 0X55555555;                         // OUTPUT MODE SELECT 
    GPIOF->OTYPER  = 0x00000000;                         // OUTPUT Type. Push Pull mode
    GPIOF->PUPDR   = 0x00000000;                         // No Pull up, No Pull-Down
    GPIOF->OSPEEDR = 0xFFFFFFFF;                         // High speed mode selection
    GPIOF->ODR     = 0x00000000;                         //Initially all the LEDs are in off state i:e, low state
    
    GPIOG->MODER   = 0x00000000;                         // OUTPUT MODE SELECT  00- input mode
    GPIOG->OTYPER  = 0x00000000;                         // output type
    GPIOG->PUPDR   = 0x00000000;                         // No pull Up, No Pull-Down
    GPIOG->OSPEEDR = 0xFFFFFFFF;                       // High Speed mode
    GPIOG->ODR     = 0x00000000;                         // Initially all the LEDs are in off state i:e, low state
    
  }   
     
 int main(void)
  {
    int val;                                             // Variable for storing dip switches
    mx_pinout_config();                                  // Configuring Pors
    while (1)
      {
        val = (GPIOG->IDR) & 0xFF;                  // Read DIP Switches // IDR= input data register it contains logic on input GPIOG pins// Mask operation 0Xff= it contains only PG0-PG7
        GPIOF->ODR = ~val;                // It will send the information to LEDS
      }
  }