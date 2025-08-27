import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


export default function SermonEmbed({ id, title = 'Sermon' }) {
    return (
        <div className="rounded-xl2 overflow-hidden ring-1 ring-line">
            <LiteYouTubeEmbed id={id} title={title} poster="maxresdefault" />
        </div>
    )
}