 import React from 'react';
 import './Button.css';

 export default props => {
   //Primeira opção para o uso de multiplas classes do css

   let classes ='button '
   classes += props.operation ? 'operation': ''
   classes += props.double ? 'double': ''
   classes += props.triple ? 'triple': ''
   return(
      /*precisamos adicionar o evento de clique, ao clicar ele vai chamar uma função de props.click(e.target.label) */
      <button 
         onClick= {e => props.click && props.click(props.label)}
      
      className={classes}>
         {props.label}
      </button>
   )

 }   

    //Outra opçâo é criando dentro do return o mesmo template string
   /*return (
      <button className={` 
         button
         ${props.operation ? 'operation': ''}
         ${props.double ? 'double': ''}
         ${props.triple ? 'triple': ''}    
       
       `}> {/*Template string, ou sejá posso colocar varias classes */ 
     // {props.label}
    //  </button>
      //)*/

 //Uma das opções para adicionar varias condições de classe é usando o template string
    /*<button className={` 
      button
      ${props.operation ? 'operation': ''}
      ${props.double ? 'double': ''}
      ${props.triple ? 'triple': ''}    
    
    `}> {/*Template string, ou sejá posso colocar varias classes */
   //    {props.label}
     //</button>
 