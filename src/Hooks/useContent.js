import { useState, useEffect } from 'react';
import firebase from '../lib/firebase';

export default function useContent(type) {
    const [content, setContent] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection(type)
            .onSnapshot((snapshot) => {
                const allContent = snapshot.docs.map((ele) => {
                    return {
                        ...ele.data(),
                        docId: ele.id,
                    };
                });
                setContent(allContent);
            });
    }, [type]);
    return { [type]: content };
}
