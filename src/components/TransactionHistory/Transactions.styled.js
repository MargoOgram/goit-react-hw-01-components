import styled from 'styled-components';


export const TransactHistory = styled.table`
  border-collapse: collapse;
  border: 1px solid;
  width: 300px;
  margin-top:50px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  text-align: center;
  
  th {
    background-color: #532a4a;
    color: white;
    padding: 5px 0 5px 0;
  }
  td {
    text-align: center;
  }
  th, td {
    border-bottom: 1px solid #ddd;
    padding: 5px;
    text-align: left;
  }
  tr:nth-child(even) {background-color: #f2f2f2;}
  tr:hover {background-color: coral;}
`;
