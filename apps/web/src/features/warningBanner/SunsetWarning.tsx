import ErrorMessage from '@/components/tx/ErrorMessage'
import { Typography } from '@mui/material'
import ExternalLink from '@/components/common/ExternalLink'
import { useHasFeature } from '@/hooks/useChains'
import { FEATURES } from '@/utils/chains'

export const SunsetWarning = () => {
  const isFeatureEnabled = useHasFeature(FEATURES.SUNSET_BANNER)

  if (!isFeatureEnabled) return null

  return (
    <ErrorMessage level="warning" title="Game7 is migrating its on-chain operations to Arbitrum One">
      <Typography display="inline" mr={1}>
        Dear users, Support for Game7 Mainnet will end soon. Please  bridge out your liquid tokens to Arbitrum One by September 10, 2025.
      </Typography>
      <Typography display="inline">
        For further details regarding the migration, please refer to this{' '}
        <ExternalLink href="https://migration.game7.io">page</ExternalLink>.
      </Typography>
    </ErrorMessage>
  )
}
