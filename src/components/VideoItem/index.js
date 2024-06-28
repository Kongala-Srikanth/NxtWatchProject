import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import NxtContext from '../../context/NxtContext'
import {VideoTitle} from './styledComponents'
import './index.css'

const VideoItem = props => {
  const {videosData} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videosData
  const {name, profileImageUrl} = channel
  const date = formatDistanceToNow(new Date(publishedAt)).split(' ')

  return (
    <NxtContext.Consumer>
      {value => {
        const {isLightMode} = value
        return (
          <li className="each-video-container">
            <Link to={`/videos/${id}`} className="link">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="thumbnail-img"
              />
              <div className="video-details-container">
                <img
                  src={profileImageUrl}
                  alt="channel logo"
                  className="channel-img"
                />
                <div className="descripton-details">
                  <VideoTitle color={isLightMode}>{title}</VideoTitle>
                  <div className="video-details">
                    <p className="channel-name">{name}</p>
                    <p className="view-count">{viewCount} views</p>
                    <p className="view-count">
                      {date[1]} {date[2]} ago
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default VideoItem
