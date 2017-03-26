import Icon from './iconimo.icon';

class Minus extends Icon {

    constructor(dimensions, shapes, config) {
        super(dimensions, shapes, config);
    }

    show() {

        let resetOptions = {
            origin: '50% 50%',
            y: 0,
            x: 0,
            angle: 0,
            scale: 1,
            duration: this._config.duration,
            strokeDashoffset: 0,
            radiusX: this._dimensions.baseRadius,
        };

        return new Promise((resolve, reject) => {

            let counter = 3;

            this._shapes[1]
                .then(resetOptions)
                .then(
                    {
                        angle: 0,
                        radiusX: this._dimensions.baseRadius * 0.8,
                        duration: this._config.duration,
                    }
                )
                .then({
                    onComplete : () => {
                        counter--;
                        if(!counter) {
                            resolve();
                        }
                    }
                }).play();

            this._shapes[0]
                .then(
                    {
                        delay: this._config.duration,
                        origin: '50% 50%',
                        y: 0,
                        x: 0,
                        angle: 0,
                        scale: 0,
                        strokeDashoffset: 0,
                        duration: 1,
                    }
                )
                .then({
                    onComplete : () => {
                        counter--;
                        if(!counter) {
                            resolve();
                        }
                    }
                }).play();

            this._shapes[2]
                .then(
                    {
                        delay: this._config.duration,
                        origin: '50% 50%',
                        y: 0,
                        x: 0,
                        angle: 0,
                        scale: 0,
                        strokeDashoffset: 0,
                        duration: 1,
                    }
                )
                .then({
                    onComplete : () => {
                        counter--;
                        if(!counter) {
                            resolve();
                        }
                    }
                }).play();

        });

    }

    out() {

        return new Promise((resolve, reject) => {

            let counter = 3;

            for (let i = 0, l = counter; i < l; i++) {
                let _shape = this._shapes[i];
                _shape
                    .then({
                        angle: 0,
                        duration: this._config.duration / 1.5,
                        scale: 1,
                        x: 0,
                        y: 0,
                        radiusX: this._dimensions.baseRadius,
                    })
                    .then({
                        onComplete : () => {
                            counter--;
                            if(!counter) {
                                resolve();
                            }
                        }
                    })
                    .play();
            }

        });

    }

}

export default Minus;