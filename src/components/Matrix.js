import React from "react";
import "./Table.css"
// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { enableRipple } from '@syncfusion/ej2-base';
import { Button, Typography } from '@mui/material';


export const Matrix=()=>{
    

    function link1() {
        window.open("https://www.geeksforgeeks.org/program-to-find-transpose-of-a-matrix/");
    }

    function link2() {
        window.open("https://www.geeksforgeeks.org/adjoint-inverse-matrix/");
    }

    function link3() {
        window.open("https://www.geeksforgeeks.org/c-program-multiply-two-matrices/");
    }

    function link4() {
        window.open("https://www.geeksforgeeks.org/rotate-matrix-90-degree-without-using-extra-space-set-2/");
    }

    function link5() {
        window.open("https://www.geeksforgeeks.org/count-zeros-in-a-row-wise-and-column-wise-sorted-matrix/");
    }

    function link6() {
        window.open("https://www.geeksforgeeks.org/adjoint-inverse-matrix/");
    }

    function link7() {
        window.open("https://www.geeksforgeeks.org/search-element-sorted-matrix/");
    }

    function link8() {
        window.open("https://www.geeksforgeeks.org/find-distinct-elements-common-rows-matrix/");
    }

    return(
       
       <div className="table-container"><body>

            <table >
                <thead>
                    <tr>
                        <th className="id">ID</th>
                        <th>Questions</th>
                        <th>Links</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="clr">
                        <td>01</td>
                        <td className="Q">Program to find transpose of a matrix</td>
                        <td><a href="https://www.geeksforgeeks.org/program-to-find-transpose-of-a-matrix/" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td>
                    </tr>
                    <tr>
                    <td>02</td>
                        <td className="Q">Adjoint and Inverse of a Matrix</td>
                        <td><a href="https://www.geeksforgeeks.org/adjoint-inverse-matrix/" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="2nd Q link"/></a>
                          </td> 
                    </tr>
                    <tr>
                    <td>03</td>
                        <td className="Q">Program to multiply two matrices</td>
                        <td><a href="https://www.geeksforgeeks.org/c-program-multiply-two-matrices/" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td> 
                    </tr>
                    <tr>
                    <td>04</td>
                        <td className="Q">Rotate a matrix by 90 degree without using any extra space</td>
                        <td><a href="https://www.geeksforgeeks.org/rotate-matrix-90-degree-without-using-extra-space-set-2/" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="4nd Q link"/></a></td> 
                    </tr>
                    <tr>
                    <td>05</td>
                        <td className="Q">Count zeros in a row wise and column wise sorted matrix</td>
                        <td><a href="https://www.geeksforgeeks.org/count-zeros-in-a-row-wise-and-column-wise-sorted-matrix/" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td> 
                    </tr>
                    <tr>
                    <td>06</td>
                        <td className="Q">Find a specific pair in Matrix</td>
                        <td><a href="https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="2nd Q link"/></a></td> 
                    </tr>
                    <tr>
                    <td>07</td>
                        <td className="Q">Search element in a sorted matrix</td>
                        <td><a href="https://www.geeksforgeeks.org/search-element-sorted-matrix/" target="_blank" rel="noreferrer"><img src="gfg.jpg" alt="1st Q link"/></a></td> 
                    </tr>
                    <tr>
                    <td>08</td>
                        <td className="Q">Find distinct elements common to all rows of a matrix</td>
                        <td><a href="https://www.geeksforgeeks.org/find-distinct-elements-common-rows-matrix/" target="_blank" rel="noreferrer"><img src="gfg-gg-logo.jpg" alt="2nd Q link"/></a></td> 
                    </tr>
                                         
                    </tbody>
            </table>

        </body></div> 
        
)}

export default Matrix