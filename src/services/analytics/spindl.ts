import spindl from '@spindl-xyz/attribution-lite'
import { IS_PRODUCTION } from '@/config/constants'

const SPINDL_DISABLED = true

export const spindlInit = () => {
  const SPINDL_SDK_KEY = process.env.NEXT_PUBLIC_SPINDL_SDK_KEY

  if (!IS_PRODUCTION || !SPINDL_SDK_KEY || SPINDL_DISABLED) return

  spindl.configure({
    sdkKey: SPINDL_SDK_KEY || '',
    debugMode: false,
  })

  spindl.enableAutoPageViews()
}

export const spindlAttribute = (address: string) => {
  if (!IS_PRODUCTION || SPINDL_DISABLED) return

  spindl.attribute(address)
}
