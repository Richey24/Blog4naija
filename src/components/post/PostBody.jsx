import vector from '../../img/Vector.svg'
import { useNavigate } from 'react-router-dom'
import calender from '../../img/calender.svg'
import blogImage from '../../img/blog.jpg'
import medium from '../../img/medium.svg'
import linkedin from '../../img/linkedin.svg'
import twitter from '../../img/twitter.svg'

const PostBody = ({ large }) => {
    let navigate = useNavigate()
    return (
        <div>
            <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '70px', marginTop: '12px', cursor: 'pointer' }}>
                <img style={{ height: '16px' }} src={vector} alt="vector" />
                <h6 style={{ fontWeight: 'bold', marginTop: '6px' }}>Back</h6>
            </div>
            <div>
                <p style={{ marginTop: '30px' }} className={large ? 'trend' : 'trend1'}>Blog Post Title</p>
                <p className={large ? 'trendText' : 'trendText1'}>Authors Name <img src={calender} alt='calender' style={{ marginLeft: '6px', marginBottom: '4px', marginRight: '10px', width: '14px', height: '14px' }} /> 23 May 2022</p>
            </div>
            <img src={blogImage} alt="blog" style={{ width: '100%' }} loading="lazy" placeholder='blog image' />
            <div style={{ display: 'flex', marginTop: '20px' }}>
                {
                    large && (<p className='trendText'>Kindly Share This Post</p>)
                }
                {
                    large ? (
                        <div className='social'>
                            <button className='socialButton1'><img style={{ paddingRight: '0.6rem' }} src={twitter} alt='twitter' /> TWITTER</button>
                            <button className='socialButton2'><img style={{ paddingRight: '0.6rem' }} src={linkedin} alt='linkedin' /> LINKEDIN</button>
                            <button className='socialButton3'><img style={{ paddingRight: '0.6rem' }} src={medium} alt='medium' /> MEDIUM</button>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <button className='socialButton11'><img style={{ height: '18.52px', width: '16.62px' }} src={twitter} alt='twitter' /> TWITTER</button>
                            <button className='socialButton22'><img style={{ height: '24.52px', width: '12.8px' }} src={linkedin} alt='linkedin' /> LINKEDIN</button>
                            <button className='socialButton33'><img style={{ height: '20.52px', width: '12.62px' }} src={medium} alt='medium' /> MEDIUM</button>
                        </div>
                    )
                }
            </div>

            <div>
                <h5 className={large ? 'detail' : 'detail1'}>Blog Details</h5>
                <p className={large ? 'content' : 'content1'}>Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills. Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take.</p>
            </div>
        </div>
    )
}

export default PostBody