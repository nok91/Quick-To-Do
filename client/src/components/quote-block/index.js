import React from 'react';
// Styles
import styles from './styles/quote-block.module.scss'
import useQuoteBlock from './hooks/useQuoteBlock';

function QuoteBlock() {
    const { quote } = useQuoteBlock();
    return (
        <h2
            className={styles['quote-block']}
            dangerouslySetInnerHTML={{__html: quote}} 
        />
    );
};

QuoteBlock.displayName = 'quoteBlock';

export default QuoteBlock;
