import styled from 'styled-components';

export const Form = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 86%;
    h2{
      /* margin-top: 30px; */
    }

    @media(max-width: 600px){
      height: 82%;
      margin-bottom: 20px; 
      h2{
         margin-top: 30px;
      }

    }

    form{
     
      /* margin-top: 30px; */
      margin:0 10px;
      max-width:1200px;
      min-width:320px;
      width:100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      button{
        /* width: 300px; */
        background: white;
        color: blue;
        font-weight: 400;
        padding: 10px 15px;
        border-radius: 4px;
        border: 1px solid blue;
        transition: background-color 0.2s;
        width:45%;
        margin-top: 20px;
        @media(max-width: 600px){
          width:90%;
          justify-content: center;
         

        }

        &:hover{
          color: white;
          background: blue;
        }

      }

    }

`;


export const CollectionsInputs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width:100%;
  justify-content: center;
  align-items: center;
  @media(max-width: 600px){
    flex-direction: column;
  }



  .ajuste{
      display: flex;
      flex-direction: column;
      margin:0 10px;

      /* width: ; */
      width:45%;
      @media(max-width: 600px){
        width:90%;
        justify-content: center;
      }

      

      label {
        line-height: 2;
        text-align: left;
        display: block;
        /* margin-bottom: 13px; */
        margin-top: 4px;
        color: black;
        font-size: 10px;
        font-weight: 200;
      }

      input{
        display: block;
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;
        border: 1px solid black;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
      
      }

      select{
        display: block;
        box-sizing: border-box;
        width: 100%;
        border-radius: 4px;
        border: 1px solid black;
        padding: 10px 15px;
        margin-bottom: 10px;
        font-size: 14px;
        background-color: white;
      
      }

      p{
          color: red;
          /* font-size: 10px */
      }

      

      .SelectRaca{
        width: 100%;
      }

  }

  .DivSelect{
    width: 100%;
    display: flex;
    flex-direction: row!important;
  }

`;



export const Global = styled.div`
  height: 100vh;
  width:100%

`;