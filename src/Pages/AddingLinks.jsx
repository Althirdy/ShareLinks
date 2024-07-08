import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { FaPlus } from "react-icons/fa6";
import LinkCard from 'src/Components/LinkCard';
import { LinksContext } from 'src/Context/ApiContext';
import { platform } from 'src/Data/Platform';



export default function AddingLinks() {
    const {
        linkCards,
        setLinkCards
    } = useContext(LinksContext);
    const [isValid, setisValid] = useState(false)
    useEffect(() => {
        setisValid(linkCards.some(item => item.isValidated === false))
    }, [linkCards])


    const handleInputChange = (linkCardId, e) => {
        const updatedLinkCards = linkCards.map((card) =>
            card.id === linkCardId ? { ...card, link: e.target.value } : card
        );
        setLinkCards(updatedLinkCards);
    };

    const handlePlatformChange = (linkCardId, selectedOption) => {
        const updatedLinkCards = linkCards.map((card) =>
            card.id === linkCardId ? { ...card, platform: selectedOption } : card
        );
        setLinkCards(updatedLinkCards);
    };

    const addLinkCard = () => {
        const highestId = linkCards.reduce((max, card) => (card.id > max ? card.id : max), linkCards[0].id);
        const newCard = [...linkCards, { id: highestId + 1, platform: platform[0], isValidated: false }];
        setLinkCards(newCard);
    };

    const removeLinkCard = (LinkCardId) => {
        const newLinkCard = linkCards.filter((card) => card.id !== LinkCardId);
        setLinkCards(newLinkCard);
    };
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(linkCards);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setLinkCards(items);
    };
    return (
        <>
            <div>
                <h1 className='font-bold text-2xl tracking-tight'>Customize your Links</h1>
                <p className='text-gray-700 text-sm'>Add / Edit / Remove links below and then share all your profiles with the world</p>
            </div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId='links' type='group'>
                    {(provided) => (
                        <div className='space-y-2' {...provided.droppableProps} ref={provided.innerRef}>
                            {linkCards.map((item, idx) => (
                                <Draggable key={item.id} draggableId={item.id.toString()} index={idx}>
                                    {(provided) => (
                                        <div  {...provided.draggableProps} ref={provided.innerRef}>
                                            <LinkCard
                                                dragHandleProps={provided.dragHandleProps}
                                                id={item.id}
                                                removeCard={removeLinkCard}
                                                cardData={item}
                                                setSelectedPlatform={(selectedOption) => handlePlatformChange(item.id, selectedOption)}
                                                handleInputChange={(e) => handleInputChange(item.id, e)}
                                            />
                                        </div>

                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext >
            {
                !isValid ? <motion.button
                    onClick={addLinkCard}
                    whileHover={{ scale: 1.02 }
                    }
                    className='border flex items-center justify-center py-2 gap-2 text-blue-700 font-bold border-blue-700 rounded-md' >
                    <FaPlus className='mt-[-2px]' />
                    Add new link
                </motion.button > : <span className='text-red-600 text-center text-sm'>Provide a valid link before adding new link</span>

            }
        </>
    )
}
