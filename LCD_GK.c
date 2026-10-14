#include "stm32f4xx.h"
#include "stm32f4xx_rcc.h"
#include "stm32f4xx_gpio.h"

#define RS        	GPIOB->BS5            //PB5
#define LCD_EN          GPIOB->BC6            //PC6

unsigned char a[] = {"Vi MiCROSYSTEMS"};
unsigned char i;

 void delay() 
  {
    int i,j;
    for(i=0;i<0xff;i++)
      for(j=0;j<0xff;j++);
  }

 void busy_check()   
  {
    delay();
    GPIOB->BSRRH = 0x0020;
  }

 void command_write(int comm)
  {
    busy_check();
    GPIOB->BSRRH = 0x0020;
    GPIOG->ODR = comm<<8;  
    GPIOC->BSRRL = 0x0040;
    delay();
    GPIOC->BSRRH = 0x0040;
  }

 void lcd_init()
  {
    command_write(0x38); 
    command_write(0x01); 
    command_write(0x0f); 
    command_write(0xC0); 
    command_write(0x06); 
  }

 void lcd_out(unsigned char a)
  {
    busy_check();
    GPIOB->BSRRL = 0x0020;
    GPIOG->ODR = a<<8;  
    GPIOC->BSRRL = 0x0040;
    delay();    
    GPIOC->BSRRH = 0x0040;
  }

 void mx_pinout_config(void) 
  {
   
    GPIO_InitTypeDef GPIO_InitStruct;
    RCC_AHB1PeriphClockCmd(RCC_AHB1Periph_GPIOB|RCC_AHB1Periph_GPIOC|RCC_AHB1Periph_GPIOG, ENABLE);
    GPIO_InitStruct.GPIO_Pin = GPIO_Pin_5;
    GPIO_InitStruct.GPIO_Mode = GPIO_Mode_OUT;
    GPIO_InitStruct.GPIO_OType = GPIO_OType_PP;
    GPIO_InitStruct.GPIO_PuPd = GPIO_PuPd_NOPULL;
    GPIO_InitStruct.GPIO_Speed = GPIO_Speed_100MHz;
    GPIO_Init(GPIOB, &GPIO_InitStruct);      

    GPIOC->MODER   = 0X55555555;                         // OUTPUT MODE SELECT 
    GPIOC->OTYPER  = 0x00000000;    
    GPIOC->PUPDR   = 0x00000000;
    GPIOC->OSPEEDR = 0xFFFFFFFF;
    GPIOC->ODR     = 0x00000000;    
    
    GPIOG->ODR     = 0x00000000;  
    GPIOG->MODER   = 0X55555555;                         // OUTPUT MODE SELECT 
    GPIOG->OTYPER  = 0x00000000;    
    GPIOG->PUPDR   = 0x00000000;
    GPIOG->OSPEEDR = 0xFFFFFFFF;
    GPIOG->ODR     = 0x00000000;    
   
  }   
     
 int main(void)
  {
    mx_pinout_config();
    lcd_init();
    while (1)
      { 
        command_write(0x80); //SECOND LINE
        for(i=0;a[i]!='\0';i++)
          {
            lcd_out(a[i]);
            delay();
            delay();            
          }
      }
  }
