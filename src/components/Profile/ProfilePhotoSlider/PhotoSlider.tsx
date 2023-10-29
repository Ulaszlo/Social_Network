import React from 'react';
import { Slide } from 'react-slideshow-image';

export const PhotoSlider = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        <Slide
            autoplay={false}
            onChange={function noRefCheck(){}}
            onStartChange={function noRefCheck(){}}
        >
            <div className="each-slide-effect">
                <div
                    style={{
                        backgroundImage: 'url(data:image/jpeg;base64,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)'
                    }}
                >
      <span>
        Slide 1
      </span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80)'
                    }}
                >
      <span>
        Slide 2
      </span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)'
                    }}
                >
      <span>
        Slide 3
      </span>
                </div>
            </div>
        </Slide>
    );
};

