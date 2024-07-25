let info = [
    { id: 1, title: 'contact Info One' },
    { id: 2, title: 'contact Info Two' },
    { id: 3, title: 'contact Info Three' },
  ];
  
  // @desc   Get all info
  // @route  GET /api/info
  export const getInfo = (req, res, next) => {
    const limit = parseInt(req.query.limit);
  
    if (!isNaN(limit) && limit > 0) {
      return res.status(200).json(info.slice(0, limit));
    }
  
    res.status(200).json(info);
  };
  
  // @desc    Get info by Id
  // @route   GET /api/info/:id
  export const getInfoById = (req, res, next) => {
    const id = parseInt(req.params.id);
    const contactInfo = info.find((contactInfo) => contactInfo.id === id);
  
    if (!contactInfo) {
      const error = new Error(`A contact Info with the id of ${id} was not found`);
      error.status = 404;
      return next(error);
    }
  
    res.status(200).json(contactInfo);
  };
  
  // @desc    Create new info
  // @route   POST /api/info
  export const createInfo = (req, res, next) => {
    const newContactInfo = {
      id: info.length + 1,
      title: req.body.title,
    };
  
    if (!newContactInfo.title) {
      const error = new Error(`Please include a title`);
      error.status = 400;
      return next(error);
    }
  
    info.push(newContactInfo);
    res.status(201).json(info);
  };
  
  // @desc    Update info
  // @route   PUT /api/info/:id
  export const updateInfo = (req, res, next) => {
    const id = parseInt(req.params.id);
    const contactInfo = info.find((contactInfo) => contactInfo.id === id);
  
    if (!contactInfo) {
      const error = new Error(`A contact Info with the id of ${id} was not found`);
      error.status = 404;
      return next(error);
    }
  
    contactInfo.title = req.body.title;
    res.status(200).json(contactInfo);
  };
  
  // @desc    Delete info
  // @route   DELETE /api/info/:id
  export const deleteInfo = (req, res, next) => {
    const id = parseInt(req.params.id);
    const contactInfo = info.find((contactInfo) => contactInfo.id === id);
  
    if (!contactInfo) {
      const error = new Error(`A contact Info with the id of ${id} was not found`);
      error.status = 404;
      return next(error);
    }
  
    delInfo = info.filter((contactInfo) => contactInfo.id !== id);
    res.status(200).json(delInfo);
  };