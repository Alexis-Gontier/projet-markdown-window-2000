import PopAPI from '../components/api/PopAPI'
import IconDashboard from '../components/ui/Icon/IconDashboard';

export default function MainLayout() {
  return (
    <div className='relative'>
      <IconDashboard />
      <PopAPI />
    </div>
  )
}
