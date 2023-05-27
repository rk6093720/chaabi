import React,{useState} from 'react'
import { useSelector } from 'react-redux'

const Typing = () => {
    const typingbigrams = useSelector((state)=> state.typingbigrams);
    console.log(typingbigrams);
    const [bigrams, setBigrams]= useState(typingbigrams);
  return (
    <div>
    {/* first  */}
        <div style={{ display:"flex", width:"100%", height:'50px', backgroundColor:"teal", justifyContent:"space-between",alignItems:"center"}}>
            <div>stopwatch</div>
            <div>Ringtone</div>

        </div>
        {/* second */}
        <div className='main' style={{display:"flex", width:"100%", height:"50px", justifyContent:"space-evenly"}}>
            <div className='source'>
                <strong>Source</strong>
                <div className='bache'>
                    <input type="radio"
                    value={bigrams}
                    
                    onChange={(e)=> setBigrams(e.target.value)}
                    placeholder='Bigrams' />
                    <label >Bigrams</label>
                    <br />
                    <input type="radio"
                    value="Trigrams"
                    placeholder='Trigrams' />
                    <label >Trigrams</label>
                    <br />
                    <input type="radio"
                    value="Tetragrams"
                    placeholder='Tetragrams' />
                    <label >Tetragrams</label>
                    <br />
                    <input type="radio"
                    value="Words"
                    placeholder='Words' />
                    <label >Words</label>
                    <br />
                    <input type="radio"
                    value="Custom"
                    placeholder='Custom' />
                    <label >Custom</label>
                </div>
            </div>
            <div className='scope'>
                <strong>Scope</strong>
                <div className='bache'>
                    <input type="radio"
                    value="top 50"
                    placeholder='top 50'
                     />
                     <label>Top 50</label>
                     <br />
                     <input type="radio"
                    value="top 100"
                    placeholder='top 100'
                     />
                     <label>Top 100</label>
                     <br />
                     <input type="radio"
                    value="top 150"
                    placeholder='top 50'
                     />
                     <label>Top 150</label>
                     <br />
                     <input type="radio"
                    value="top 200"
                    placeholder='top 50'
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
                    value="42" />
                    <br />
                    <label>Accuracy</label>
                    <br />
                    <input type="number"
                    value="100" />
                </div>
            </div>

        </div>
        {/* you can  write text here   */}
        <div style={{width:"80%", height:"50px", backgroundColor:"blue",margin:"auto", marginTop:"10%", color:'white', fontSize:"24px"}}>
        {bigrams.map((item)=>{
            return <div>
                {item}
                </div>
        })}
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