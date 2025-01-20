import React from 'react';
import '../Styling/Properties.css';
import icons8_location from '../Images/icons8_location.png';
import icons8_video_camera from '../Images/icons8_video_camera.png';
import icons8_camera from '../Images/icons8_camera.png';
import contact_icon from '../Images/contact_icon.png';
import icons8_plus3 from '../Images/icons8_plus3.png';
import icons8_plus2 from '../Images/icons8_plus2.png';
import icons8_plus1 from '../Images/icons8_plus1.png';
import icons8_bath from '../Images/icons8_bath.png';
import icons8_occupied_bed from '../Images/icons8_occupied_bed.png';
import icons8_grid from '../Images/icons8_grid.png';
export default function Properties() {
  return (
    <>
    <div className='Properties'>
      <div className="proper">
        <p>PROPERTIES</p>
        <h1>Explore the latest<br/>
        properties available</h1>
      </div>

      <div className="grid">
        <div className=''>
         <div className="grid-style">
           <div className="style">
             <div className="center-1">
              <div><button>Features</button></div>
              <div className='Sales'>
              <button>Sales</button>
              <button>Active</button>
              </div>
             </div>
             <div className="varun">
              <div className="icons">
                <img src={icons8_location} alt="" />
                <p>6Downtown, Las Vegas</p>
              </div>
              <div className="cam">
                <img src={icons8_video_camera} alt="" /><br/>
                <img src={icons8_camera} alt="" />
              </div>
            </div>
          </div>
          <div className="pore">
            <h3>Villa with Amazing View</h3>
            <h2>$ 213.23</h2>
            <p>Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
            <div className='icons23'>
            <p><img src={icons8_bath} alt="" />  3 </p>
            <p><img src={icons8_occupied_bed} alt="" />  4</p>
            <p><img src={icons8_grid} alt="" />  250 sq ft</p>
            </div>
            <hr />
            <div className="hid">
             <img src={contact_icon }alt="" />
             <p>Alice adams</p>
             <div className='divs'>
             <div className="saad"><img src={icons8_plus3} alt="" /></div>
             <div className="saad"><img src={icons8_plus2} alt="" /></div>
             <div className="saad"><img src={icons8_plus1} alt="" /></div>
             </div>
            </div>
          </div>
         </div>
         </div>
         <div>

         <div className="grid-style">
          <div className="style1">
            <div className="center-1">
              <div><button>Features</button></div>
              <div className='Sales'>
              <button>Sales</button>
              <button>Active</button>
              </div>
            </div>
            <div className="varun">
              <div className="icons">
                <img src={icons8_location} alt="" />
                <p>Meadows Village, Las Vegas</p>
              </div>
              <div className="cam">
                <img src={icons8_video_camera} alt="" /><br/>
                <img src={icons8_camera} alt="" />
              </div>
            </div>
          </div>
          <div className="pore">
            <h3>Townhouse for Sale</h3>
            <h2>$ 345.18</h2>
            <p>Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
            <div className='icons23'>
            <p><img src={icons8_bath} alt="" />3</p>
           <p> <img src={icons8_occupied_bed} alt="" />4</p>
           <p><img src={icons8_grid} alt="" />450 sq ft</p>
           </div>
            <hr />
            <div className="hid">
            <img src={contact_icon }alt="" />
             <p>Drew Alice</p>
             <div className='divs'>
             <div className="saad"><img src={icons8_plus3} alt="" /></div>
             <div className="saad"><img src={icons8_plus2} alt="" /></div>
             <div className="saad"><img src={icons8_plus1} alt="" /></div>
             </div>
            </div>
          </div>
         </div>
         </div>
         <div>

         <div className="grid-style">
          <div className="style2">
            <div className="center-1">
              <div><button>Features</button></div>
              <div className='Sales'>
              <button>Sales</button>
              <button>Active</button>
              </div>
            </div>
            <div className="varun">
              <div className="icons">
                <img src={icons8_location} alt="" />
                <p>49 DC townhall alex</p>
              </div>
              <div className="cam">
                <img src={icons8_video_camera} alt="" /><br/>
                <img src={icons8_camera} alt="" />
              </div>
            </div>
          </div>
          <div className="pore">
            <h3>Duplex sea facing for rent </h3>
            <h2>$ 652.18</h2>
            <p>Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
            <div className='icons23'>
            <p><img src={icons8_bath} alt="" />3</p>
            <p><img src={icons8_occupied_bed} alt="" />4</p>
            <p><img src={icons8_grid} alt="" />129 sq ft</p>
            </div>
            <hr />
            <div className="hid">
            <img src={contact_icon }alt="" />
             <p>Fursi Bam</p>
             <div className='divs'>
             <div className="saad"><img src={icons8_plus3} alt="" /></div>
             <div className="saad"><img src={icons8_plus2} alt="" /></div>
             <div className="saad"><img src={icons8_plus1} alt="" /></div>
             </div>
            </div>
          </div>
         </div>
         </div>
         <div>

         <div className="grid-style">
          <div className="style3">
            <div className="center-1">
              <div><button>Features</button></div>
              <div className='Sales'>
              <button>Sales</button>
              <button>Active</button>
              </div>
            </div>
            <div className="varun">
              <div className="icons">
                <img src={icons8_location} alt="" />
                <p>Underground street 20 texax</p>
              </div>
              <div className="cam">
                <img src={icons8_video_camera} alt="" /><br/>
                <img src={icons8_camera} alt="" />
              </div>
            </div>
          </div>
          <div className="pore">
            <h3>Villa with Side View</h3>
            <h2>$$ 876.13</h2>
            <p>Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
            <div className='icons23'>
            <p><img src={icons8_bath} alt="" />3</p>
            <p><img src={icons8_occupied_bed} alt="" />4</p>
            <p><img src={icons8_grid} alt="" />453 sq ft</p>
            </div>
            <hr />
            <div className="hid">
            <img src={contact_icon }alt="" />
             <p>Neon Alice</p>
             <div className='divs'>
             <div className="saad"><img src={icons8_plus3} alt="" /></div>
             <div className="saad"><img src={icons8_plus2} alt="" /></div>
             <div className="saad"><img src={icons8_plus1} alt="" /></div>
             </div>
            </div>
          </div>
         </div>
         </div>
         <div>

         <div className="grid-style">
          <div className="style4">
            <div className="center-1">
              <div><button>Features</button></div>
              <div className='Sales'>
              <button>Sales</button>
              <button>Active</button>
              </div>
            </div>
            <div className="varun">
              <div className="icons">
                <img src={icons8_location} alt="" />
                <p>Rubari London Hills</p>
              </div>
              <div className="cam">
                <img src={icons8_video_camera} alt="" /><br/>
                <img src={icons8_camera} alt="" />
              </div>
            </div>
          </div>
          <div className="pore">
            <h3>Awesome villa for rent</h3>
            <h2>$ 341.83</h2>
            <p>Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
            <div className='icons23'>
            <p><img src={icons8_bath} alt="" />3</p>
            <p><img src={icons8_occupied_bed} alt="" />4</p>
            <p><img src={icons8_grid} alt="" />320 sq ft</p>
            </div>
            <hr />
            <div className="hid">
            <img src={contact_icon }alt="" />
             <p>Firari Alice</p>
             <div className='divs'>
             <div className="saad"><img src={icons8_plus3} alt="" /></div>
             <div className="saad"><img src={icons8_plus2} alt="" /></div>
             <div className="saad"><img src={icons8_plus1} alt="" /></div>
             </div>
            </div>
          </div>
         </div>
         </div>
         <div>

         <div className="grid-style">
          <div className="style5">
            <div className="center-1">
              <div><button>Features</button></div>
              <div className='Sales'>
              <button>Sales</button>
              <button>Active</button>
              </div>
            </div>
            <div className="varun">
              <div className="icons">
                <img src={icons8_location} alt="" />
                <p>Northean fersh alice</p>
              </div>
              <div className="cam">
                <img src={icons8_video_camera} alt="" /><br/>
                <img src={icons8_camera} alt="" />
              </div>
            </div>
          </div>
          <div className="pore">
            <h3>Street Farm for sale</h3>
            <h2>$ 675.23</h2>
            <p>Beautiful, updated, ground level Co-op apartment in the desirable Bay Terrace neighborhood</p>
            <div className='icons23'>
            <p><img src={icons8_bath} alt="" />3</p>
            <p><img src={icons8_occupied_bed} alt="" />4</p>
            <p><img src={icons8_grid} alt="" />340 sq ft</p>
            </div>
            <hr />
            <div className="hid">
            <img src={contact_icon}alt="" />
             <p>Jordan Bram</p>
             <div className='divs'>
             <div className="saad"><img src={icons8_plus3} alt="" /></div>
             <div className="saad"><img src={icons8_plus2} alt="" /></div>
             <div className="saad"><img src={icons8_plus1} alt="" /></div>
             </div>
            </div>
          </div>        
         </div>         
         </div>        
      </div>
    </div>
    <div className='btn23'>
        <button type='button'>LOAD MORE</button>
      </div>
    </>
  )
}
