// import React, { useEffect, useState } from 'react';

// const RollIdPrompt = ({ onRollIdSubmit }) => {
//   const [rollId, setRollId] = useState('');

//   useEffect(() => {
//     const inputRollId = prompt("Please enter your roll ID:")?.toLowerCase() || '';
//     setRollId(inputRollId);
//     onRollIdSubmit(inputRollId); 
//   }, [onRollIdSubmit]);

//   return null; 
// };

// export default RollIdPrompt;



// import React, { useEffect } from 'react';
// import { useRollId } from './RollIdContext';

// const RollIdPrompt = () => {
//   const { rollId, setRollId } = useRollId();

//   useEffect(() => {
//     // Show prompt only if rollId is not set
//     if (!rollId) {
//       const input = prompt('Please enter your Roll ID:');
//       if (input) {
//         setRollId(input); // Set the roll ID in context
//       }
//     }
//   }, [rollId, setRollId]);

//   return null; // No UI to render
// };

// export default RollIdPrompt;


// import { useEffect, useState } from 'react';
// import { useRollId } from './RollIdContext';

// const RollIdPrompt = () => {
//   const { rollId, setRollId } = useRollId();
//   const [hasPrompted, setHasPrompted] = useState(false); // State to track if prompt has been shown

//   useEffect(() => {
//     // Show prompt only if rollId is not set and it has not been prompted yet
//     if (!rollId && !hasPrompted) {
//       const input = prompt('Please enter your Roll ID:');
//       if (input) {
//         setRollId(input); // Set the roll ID in context
//       }
//       setHasPrompted(true); // Mark that we have shown the prompt
//     }
//   }, [rollId, setRollId, hasPrompted]);

//   return null; // No UI to render
// };

// export default RollIdPrompt;



import { useEffect} from 'react';
import { useRollId } from './RollIdContext';
import { useParams } from 'react-router-dom';


const RollIdPrompt = () => {
    const { rollId, setRollId } = useRollId();
    const { userType} = useParams();

    useEffect(() => {
        console.log('RollIdPrompt useEffect triggered'); // Log when useEffect runs

        if (userType) {

                setRollId(userType === "monazam" ? "1" : "hgo" );
        
        } else {
            console.log(`Roll ID already set: ${rollId}`); // Log if rollId is already set
        }
    }, [userType]);

    return null; 
};

export default RollIdPrompt;

