( ( )  =>  {
    const  menuBtnRef  =  документ . querySelector ( "[кнопка меню-дані]" ) ;
    const  mobileMenuRef  =  документ . querySelector ( "[меню даних]" ) ;
  
    менюBtnRef . addEventListener ( "натиснути" ,  ( )  =>  {
      const  розширений  =
        менюBtnRef . getAttribute ( "розширений арією" )  ===  "true"  ||  помилковий ;
  
      менюBtnRef . classList . toggle ( "є-відкрито" ) ;
      менюBtnRef . SetAttribute ( "арія спінені" , ! Розширено ) ;
  
      mobileMenuRef . classList . toggle ( "є-відкрито" ) ;
    } ) ;
  } ) ( ) ;