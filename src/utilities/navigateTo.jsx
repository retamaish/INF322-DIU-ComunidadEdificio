import { useNavigate } from 'react-router-dom'

export const navigateTo = (route) => {
  const navigate = useNavigate()

  return () => {
    navigate(route)
  }
}
