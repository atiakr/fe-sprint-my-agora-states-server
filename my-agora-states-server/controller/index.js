const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const _data = discussionsData.filter(el => (el.id === Number(req.params.id)));
    if (_data.length === 0) res.status(404).send('일치하는 아이디가 존재하지 않습니다.');
    else res.status(200).json(..._data);
  }
};

module.exports = {
  discussionsController,
};
