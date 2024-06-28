import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {IoReorderThreeOutline} from 'react-icons/io5'
import {NavBar, IconBtn, LogoutButton, PopContainer} from './styledComponents'
import NxtContext from '../../context/NxtContext'
import SideBarSM from '../SideBarSM'

import './index.css'

const Header = props => (
  <NxtContext.Consumer>
    {value => {
      const {isLightMode, onLightMode, onSideBar, onSideBarSm} = value

      const onThemeChange = () => onLightMode()
      const onActiveBtn = id => onSideBar(id)

      const onLogoutClicked = () => {
        const {history} = props
        console.log(history)
        Cookies.remove('jwt_token')
        onSideBar('HOME')
        history.replace('/login')
      }

      return (
        <>
          <div className="sm-header">
            <NavBar bgColor={isLightMode}>
              <Link to="/" className="link">
                <img
                  src={
                    isLightMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                  className="logo"
                  onClick={() => onActiveBtn('HOME')}
                />
              </Link>

              <ul className="dark-mode-icons-container">
                <li key="Theme">
                  <IconBtn
                    color={isLightMode}
                    type="button"
                    onClick={onThemeChange}
                    data-testid="theme"
                  >
                    {isLightMode ? (
                      <FaMoon className="icons" />
                    ) : (
                      <FiSun className="icons" />
                    )}
                  </IconBtn>
                </li>
                <li key="Options">
                  <Popup
                    modal
                    trigger={
                      <IconBtn
                        color={isLightMode}
                        type="button"
                        onClick={onSideBarSm}
                      >
                        <IoReorderThreeOutline className="icons" />
                      </IconBtn>
                    }
                  >
                    {close => <SideBarSM />}
                  </Popup>
                </li>
                <li key="Logout">
                  <Popup
                    modal
                    trigger={
                      <IconBtn
                        color={isLightMode}
                        type="button"
                        onClick={onLogoutClicked}
                      >
                        <FiLogOut className="icons" />
                      </IconBtn>
                    }
                  >
                    {close => (
                      <div className="logout-position-container">
                        <PopContainer bgColor={isLightMode}>
                          <div>
                            <p className="alert-description">
                              Are you sure, you want to logout
                            </p>
                          </div>
                          <div className="alert-btn-container">
                            <button
                              type="button"
                              className="close-btn"
                              onClick={() => close()}
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="close-btn confirm-btn"
                              onClick={onLogoutClicked}
                            >
                              Confirm
                            </button>
                          </div>
                        </PopContainer>
                      </div>
                    )}
                  </Popup>
                </li>
              </ul>
            </NavBar>
          </div>
          <div className="lg-header">
            <NavBar bgColor={isLightMode}>
              <Link to="/" className="link">
                <img
                  src={
                    isLightMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                  className="logo"
                  onClick={() => onActiveBtn('HOME')}
                />
              </Link>

              <ul className="dark-mode-icons-container">
                <li>
                  <IconBtn
                    color={isLightMode}
                    type="button"
                    onClick={onThemeChange}
                    data-testid="theme"
                  >
                    {isLightMode ? (
                      <FaMoon className="icons" />
                    ) : (
                      <FiSun className="icons" />
                    )}
                  </IconBtn>
                </li>
                <li>
                  <IconBtn color={isLightMode} type="button">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                      className="profile-icon"
                    />
                  </IconBtn>
                </li>
                <li>
                  <div className="popup-container">
                    <Popup
                      modal
                      trigger={
                        <LogoutButton
                          bgColor={isLightMode}
                          type="button"
                          className="logout-btn"
                        >
                          Logout
                        </LogoutButton>
                      }
                    >
                      {close => (
                        <div className="logout-position-container">
                          <PopContainer bgColor={isLightMode}>
                            <div>
                              <p className="alert-description">
                                Are you sure, you want to logout
                              </p>
                            </div>
                            <div className="alert-btn-container">
                              <button
                                type="button"
                                className="close-btn"
                                onClick={() => close()}
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="close-btn confirm-btn"
                                onClick={onLogoutClicked}
                              >
                                Confirm
                              </button>
                            </div>
                          </PopContainer>
                        </div>
                      )}
                    </Popup>
                  </div>
                </li>
              </ul>
            </NavBar>
          </div>
        </>
      )
    }}
  </NxtContext.Consumer>
)

export default withRouter(Header)
