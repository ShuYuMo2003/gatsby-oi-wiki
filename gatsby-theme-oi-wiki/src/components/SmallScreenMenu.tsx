import {makeStyles} from '@material-ui/core/styles'

import {Menu, MenuItem, IconButton, Hidden, ListItemIcon} from '@material-ui/core'

import SettingsIcon from '@material-ui/icons/Settings'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import GitHubIcon from '@material-ui/icons/GitHub'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import React from 'react'

const useStyles = makeStyles((theme) => ({
  iconItem: {
    minWidth: theme.spacing(5),
  },
  sideMenu: {
    transition: 'none !important',
  },
}))

const SmallScreenMenu: React.FC<unknown> = function (props) {
  const OIWikiGithub = 'https://github.com/OI-wiki/OI-wiki'

  const classes = useStyles({

  })

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = React.useCallback((event): void => {
    // event.stopPropagation();
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = React.useCallback((): void => {
    setAnchorEl(null)
  }, [])

  return (
    <Hidden mdUp implementation="js">
      <IconButton color="inherit" onClick={(e) => handleClick(e)} disableRipple disableFocusRipple>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        // TransitionComponent={({children}) => children}
        TransitionProps={{timeout: 0}}
        classes={{list: classes.sideMenu}}
      >
        <MenuItem component="a" href="/settings">
          <ListItemIcon classes={{root: classes.iconItem}}>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
    设置
        </MenuItem>
        <MenuItem component="a" href="/tags">
          <ListItemIcon classes={{root: classes.iconItem}}>
            <LocalOfferIcon fontSize="small" />
          </ListItemIcon>
    标签
        </MenuItem>
        <MenuItem component="a" href="/pages">
          <ListItemIcon classes={{root: classes.iconItem}}>
            <LibraryBooksIcon fontSize="small" />
          </ListItemIcon>
    目录</MenuItem>
        <MenuItem component="a" href={OIWikiGithub}>
          <ListItemIcon classes={{root: classes.iconItem}}>
            <GitHubIcon fontSize="small" />
          </ListItemIcon>
    GitHub</MenuItem>
      </Menu>
    </Hidden>)
}

export default SmallScreenMenu
