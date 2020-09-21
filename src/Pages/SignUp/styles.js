import styled from 'styled-components';


export const Form = styled.div`
    padding-top: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
      margin-top: 30px;
    }

    form{
      margin-top: 30px;
      margin:0 10px;
      max-width:1200px;
      width:100%;

      div{
        display: flex;
        flex-direction: column;
        margin:0 10px;

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
          /* width: 300px; */
          display: block;
          box-sizing: border-box;
          width: 100%;
          border-radius: 4px;
          border: 1px solid black;
          padding: 10px 15px;
          margin-bottom: 10px;
          font-size: 14px;
          border-radius
        }

        p{

        }
      }

    }


`;


export const Global = styled.div`
  height: 100vh;
  width:100%

`;