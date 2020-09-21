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
      max-width: 600px;
      background: green;

      div{
        display: flex;
        flex-direction: column;

        label {
          line-height: 2;
          text-align: left;
          display: block;
          margin-bottom: 13px;
          margin-top: 20px;
          color: black;
          font-size: 14px;
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
      }

    }


`;


export const Global = styled.div`
  height: 100vh;
  width:100%

`;