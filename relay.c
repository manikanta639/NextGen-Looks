#include "stm32f4xx.h"
#include "stm32f4xx_rcc.h"

 void delay()
  {
   for(int i=0;i<0x3FF;i++) 
     for(int j=0;j<0x3FF;j++);
  }

 void mx_pinout_config(void) 
  {
    RCC_AHB1PeriphClockCmd(RCC_AHB1Periph_GPIOF, ENABLE);
    GPIOF->MODER   = 0X55555555;                         // OUTPUT MODE SELECT 
    GPIOF->OTYPER  = 0x00000000;    
    GPIOF->PUPDR   = 0x00000000; 
    GPIOF->OSPEEDR = 0xFFFFFFFF;
    GPIOF->ODR     = 0x00000000;       
  }   
     
 int main(void)
  {
    mx_pinout_config();
    while (1)
      {
        GPIOF->ODR = 0xFFFFFFF0;   
        delay();
        GPIOF->ODR = 0x00000000;   
        delay();
      }
  }

