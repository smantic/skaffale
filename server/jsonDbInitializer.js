const { JsonDB, Config } = require('node-json-db')

// The first argument is the database filename. If no extension, '.json' is assumed and automatically added.
// The second argument is used to tell the DB to save after each push
// If you put false, you'll have to call the save() method.
// The third argument is to ask JsonDB to save the database in an human readable format. (default false)
// The last argument is the separator. By default it's slash (/)
var db = new JsonDB(new Config("database", true, true, '/'));

db.push('/libraries', [
    {
        "name": "Tinygrad",
        "description": "For something in between a pytorch and a karpathy/micrograd",
        "logo": "https://raw.githubusercontent.com/tinygrad/tinygrad/master/docs/logo.png",
        "language": "python",
        "package_url": "https://pypi.org/project/tinygrad/",
        "latest_version": "0.6.0",
        "website": "https://tinygrad.org/",
        "github": "https://github.com/tinygrad/tinygrad",
        "stars_review": 5
    },
    {
        "name": "Pytorch",
        "description": "PyTorch is a Python package that provides two high-level features: Tensor computation (like NumPy) with strong GPU acceleration, Deep neural networks built on a tape-based autograd system",
        "logo": "https://github.com/pytorch/pytorch/raw/main/docs/source/_static/img/pytorch-logo-dark.png",
        "language": "python",
        "package_url": "https://pypi.org/project/pytorch/",
        "latest_version": "1.0.2",
        "website": "https://hud.pytorch.org/ci/pytorch/pytorch/main",
        "github": "https://github.com/pytorch/pytorch",
        "stars_review": 5
    },
    {
        "name": "Micrograd",
        "description": "A tiny Autograd engine (with a bite! :)). Implements backpropagation (reverse-mode autodiff) over a dynamically built DAG and a small neural networks library on top of it with a PyTorch-like API.",
        "logo": "https://github.com/karpathy/micrograd/raw/master/puppy.jpg",
        "language": "python",
        "package_url": "https://pypi.org/project/micrograd/",
        "latest_version": "0.1.0",
        "website": "https://github.com/karpathy/micrograd",
        "github": "https://github.com/karpathy/micrograd",
        "stars_review": 5
    }
])
