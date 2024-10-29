import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
export const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt=''></img>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt=''></img>
            })}
        </div>
        <div className="mywork-showmore">
            <a className='link' href='https://github.com/HazemELhanash'><p>Show More</p></a>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}
export default MyWork
