import { CircularProgress } from '@mui/material'
import { styled } from '@mui/material/styles'

export default function Loader() {
  return <StyledCircularProgress />
}

const StyledCircularProgress = styled(CircularProgress)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
}))
