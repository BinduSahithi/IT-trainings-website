import React from "react";
const ListEx =()=>{
    const Batches= [ {
        
        course:"react js",
        duration:"30 days",
        startdate:"dec28",
        trainer:"qwerty",
    },
    {
       
        course:"java",
        duration:"29 days",
        startdate:"jan28",
        trainer:"kikky",
    },
    {
        
        course:"python",
        duration:"25 days",
        startdate:"feb28",
        trainer:"mimi",
    }, 
]
return(
    <div>
        <h1>upcoming batches</h1>
        <table>
            <thead>
                <tr>
                    
                    <th>course</th>
                    <th>duration</th>
                    <th>startdate</th>
                    <th>trainer</th>               
                </tr>
            </thead>
            <tbody>
                
                {Batches.map((data)=>{
                    return(
                        <tr>
                         <td>{data.course}</td>
                        <td>{data.duration}</td>
                        <td>{data.startdate}</td>
                        <td>{data.trainer}</td>
                        </tr>
                    );
                }
                )}
                
            </tbody>
        </table>
    </div>

);
}
export default ListEx
