
import { FidgetSpinner } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <FidgetSpinner
        visible={true}
        height={80}
        width={80}
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClassName="dna-wrapper"
        ballColor="#ff0000"
        secondaryColor="#00ff00"
        tertiaryColor="#0000ff"
        backgroundColor="#F4442E"
      />
    </div>
  );
};

export default Loader;