import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Timer from './Timer';
const Typing = () => {
  const source = useSelector((state)=> state.source);
  const [searchParams,setSearchParams]= useSearchParams();
  const initialSource = searchParams.getAll("Source");
  const initialScope = searchParams.getAll("Scope");
  const [scope,setScope]= useState(initialScope || []);
  const [category,setCategory]= useState(initialSource || []);
 const [data, setData]=useState()
  const handleChangeSource = (e)=>{
    const newSource = [...category];
    const newScope = [...scope];
    console.log(newScope);
    if(newSource.includes(e.target.value) || newScope.includes(e.target.value))
    {
        newSource.splice(newSource.indexOf(e.target.value),1);
        newScope.splice(newScope.indexOf(e.target.value),1);
    }else{
        newSource.push(e.target.value);
        newScope.push(e.target.value);
    }
    setCategory(newSource);
    setScope(newScope);
    
  }

   console.log(source);
    useEffect(()=>{
         if(category || scope){
            let params={};
            // eslint-disable-next-line no-unused-expressions
            category && (params.Source === category);
            // eslint-disable-next-line no-unused-expressions
            scope   && (params.Scope === scope);
            // console.log(params);
            setSearchParams(params);
        
         }
         
    },[category, scope, setSearchParams])

    console.log(category);
  return (
    <div>
    {/* first  */}
        <div style={{ display:"flex", width:"100%", height:'50px', backgroundColor:"teal", justifyContent:"space-between",alignItems:"center"}}>
            <div>
                <Timer/>
            </div>
            <div>Ringtone</div>

        </div>
        {/* second */}
        <div className='main' style={{display:"flex", width:"100%", height:"50px", justifyContent:"space-evenly"}}>
            <div className='source'>
                <strong>Source</strong>
                <div className='bache'>
                    <input type="radio"
                    name='source'
                    value="Bigrams"
                    checked={category.includes("Bigrams")}
                    onChange={handleChangeSource}
                    placeholder='Bigrams' />
                    <label >Bigrams</label>
                    <br />
                    <input type="radio"
                    value="Trigrams"
                    name='source'
                    checked={category.includes("Trigrams")}
                    onChange={handleChangeSource}
                    placeholder='Trigrams' />
                    <label >Trigrams</label>
                    <br />
                    <input type="radio"
                    value="Tetragrams"
                    name='source'
                    checked={category.includes("Tetragrams")}
                    onChange={handleChangeSource}
                    placeholder='Tetragrams' />
                    <label >Tetragrams</label>
                    <br />
                    <input type="radio"
                    value="Words"
                    name='source'
                    checked={category.includes("Words")}
                    onChange={handleChangeSource}
                    placeholder='Words' />
                    <label >Words</label>
                    <br />
                    <input type="radio"
                    value="Custom"
                    name='source'
                    checked={category.includes("Custom")}
                    onChange={handleChangeSource}
                    placeholder='Custom' />
                    <label >Custom</label>
                </div>
            </div>
            <div className='scope'>
                <strong>Scope</strong>
                <div className='bache'>
                    <input type="radio"
                     name='scope'
                    value="Top 50"
                    checked={scope.includes("Top 50")}
                    onChange={handleChangeSource}
                    placeholder='Top 50'
                     />
                     <label>Top 50</label>
                     <br />
                     <input type="radio"
                     name='scope'
                     checked={scope.includes("Top 100")}
                    onChange={handleChangeSource}
                    value="Top 100"
                    placeholder='Top 100'
                     />
                     <label>Top 100</label>
                     <br />
                     <input type="radio"
                     name='scope'
                     checked={scope.includes("Top 150")}
                    onChange={handleChangeSource}
                    value="Top 150"
                    placeholder='Top 50'
                     />
                     <label>Top 150</label>
                     <br />
                     <input type="radio"
                     name='scope'
                    value="Top 200"
                    checked={scope.includes("Top 200")}
                    onChange={handleChangeSource}
                    placeholder='Top 50'
                     />
                     <label>Top 200</label>

                </div>
            </div>
            <div className='Generator'>
                <strong>Generator</strong>
                <div className='bache'>
                <label>Combination</label>
                <br />
                    <input type="number"
                    value="2"
                     />
                      <br />
                      <label>Repetition</label>
                      <br />
                     <input type="number"
                     value="2" />
                     

                </div>
            </div>
            <div className='Threshold'>
                <strong>Threshold</strong>
                <div className='bache'>
                    <label >WPM</label>
                    <br />
                    <input type="number"
                    value="42" 
                    max="100"
                    min="500"/>
                    <br />
                    <label>Accuracy</label>
                    <br />
                    <input type="number"
                    value="100" />
                </div>
            </div>

        </div>
        {/* lesson */}
        <div className='lesson' style={{marginTop:"6%"}}>
            lesson 1/25
        </div>
        {/* you can  write text here   */}
        <div style={{width:"80%", height:"100px", backgroundColor:"blue",margin:"auto", marginTop:"5%", color:'white', fontSize:"24px"}}>
        {/* {bigrams} */}
        </div>
        <div className='text'>
        <textarea style={{ fontSize:"24px", width:"80%", height:"50px", margin:"auto", textAlign:"center", alignItems:"center"}} cols="100" rows="5"  placeholder='Re-type if failed,press <TAB> or <ESC>to reset'></textarea>
        </div>
        {/* now we can calculate Accuracy, WPM and Average  */}
        <div style={{display:"flex", width:"80%", height:"50px",margin:"auto", justifyContent:"space-evenly", textAlign:"center",alignItems:"center", fontSize:"24px"}}>
            <div>
                WPM:
            </div>
            <div>
            Accuracy:
            </div>
            <div>
                 Average WPM:
            </div>
        </div>
    </div>
  )
}

export default Typing