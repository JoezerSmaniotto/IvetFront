import styled from 'styled-components';
import { shade } from 'polished';

export const Component1 = styled.div`
    width:100vw;  
    height: 7%;
    background: red;
    display: flex;
    align-items: center;
    /* position: fixed; */
    /* z-index:1; */


        header{
            background: blue;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;


            >p{
                margin-left: 20px;
                color: #FFF;
                font-weight:700;
                font-style: oblique;
                /* font-style: italic; */
            }
            >nav{
                margin-right: 20px; 

                a{
                   text-decoration: none; 
                   color: #FFF;
                   margin: 5px;
                   transition: color 0.2s;
                }
                a:hover{
                    color: ${shade(0.2, '#FFF')};
                }
            }
        }
    }

    
`;


export const Component = styled.div`

.teste{

}

.teste1{
    
}


nav{
  background: #151515;
  padding: 5px 40px;
}
nav ul{
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
nav ul li{
  padding: 15px 0;
  cursor: pointer;
}
nav ul li.items{
  position: relative;
  width: auto;
  margin: 0 16px;
  text-align: center;
  order: 3;
}
nav ul li.items:after{
  position: absolute;
  content: '';
  left: 0;
  bottom: 5px;
  height: 2px;
  width: 100%;
  background: #33ffff;
  opacity: 0;
  transition: all 0.2s linear;
}
nav ul li.items:hover:after{
  opacity: 1;
  bottom: 8px;
}
nav ul li.logo{
  flex: 1;
  color: white;
  font-size: 23px;
  font-weight: 600;
  cursor: default;
  user-select: none;
}
nav ul li a{
  color: white;
  font-size: 18px;
  text-decoration: none;
  transition: .4s;
}
nav ul li:hover a{
  color: cyan;
}
nav ul li i{
  font-size: 23px;
}
nav ul li.btn{
  display: none;
}
nav ul li.btn.hide i:before{
  content: '\f00d';
}
@media all and (max-width: 900px){
  nav{
    padding: 5px 30px;
  }
  nav ul li.items{
    width: 100%;
    display: none;
  }
  nav ul li.items.show{
    display: block;
  }
  nav ul li.btn{
    display: block;
  }
  nav ul li.items:hover{
    border-radius: 5px;
    box-shadow: inset 0 0 5px #33ffff,
                inset 0 0 10px #66ffff;
  }
  nav ul li.items:hover:after{
    opacity: 0;
  }
}

`;