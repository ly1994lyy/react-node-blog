
  export default ({ spacing, palette }) => ({
    MuiCard: {
      root: {
        '&.MuiNewsCard--01': {
          maxWidth: 304,
          margin: 'auto',
          transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
          boxShadow: 'none',
          borderRadius: 0,
          marginTop:'30px',
          '& button': {
            marginLeft: 0,
          },
          '&:hover': {
            transform: 'scale(1.04)',
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
          },
          '& .MuiCardMedia-root': {
            paddingTop: '65%',
            position: 'relative',
            '& .MuiTypography--category': {
              color: 'rgba(255, 255, 255, 0.87)',
              position: 'absolute',
              top: spacing(2.5),
              left: spacing(2.5),
              letterSpacing: 0.5,
              fontWeight: 900,
            },
          },
          '& .MuiCardContent-root': {
            textAlign: 'left',
            padding: spacing(3),
            '& .MuiTypography--overline': {
              color: palette.grey[500],
              fontWeight: 'bold',
            },
            '& .MuiTypography--heading': {
              fontWeight: 900,
              lineHeight: 1.3,
            },
            '& .MuiTypography--subheading': {
              lineHeight: 1.8,
              color: palette.text.primary,
              fontWeight: 'bold',
            },
          },
          '& .MuiCardActions-root': {
            padding: spacing(0, 3, 3),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        },
      },
    },
    MuiButton: {
      root: {
        '& svg, .material-icons': {
          marginLeft: spacing(1),
        },
      },
      label: {
        textTransform: 'initial',
      },
    },
  });