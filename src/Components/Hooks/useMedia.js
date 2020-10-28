import React from 'react'

const useMedia = (width) => {

  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    const getSize = () => {
      const { matches } = window.matchMedia(width);
      setMatch(matches);
    }

    window.addEventListener('resize', getSize);
    getSize();

    return () => {
      window.removeEventListener('resize', getSize);
    }
  }, [match, width]);

  return match
}

export default useMedia
