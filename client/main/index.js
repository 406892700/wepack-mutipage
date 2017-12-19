import './index.scss';
import fc from './src/fc';

class A {
    fc(dd) {
        console.log(22222+dd);
    }
}

new A().fc(33333);
console.log('hahahahhaah')
fc();

// hmr
if (module.hot) {
    module.hot.accept();
}
