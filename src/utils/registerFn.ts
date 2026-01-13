import { toast } from 'sonner'

export const registerFn = () => {
  toast('Starting soon', {
    description: 'Registration will be available shortly. Stay tuned!',
    duration: 3000,
  })
}
