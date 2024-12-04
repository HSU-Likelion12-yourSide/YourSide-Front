/**
 * @description 모달 상태를 반전시키는 함수이다. 해당 함수를 문서화 한 이유는 Modal Component의 props로 존재하는 isOpen을 Component를 사용할 때 지속적으로 상기시키기 위해서 였다.
 * 이 함수는 React의 `useState`를 통해 관리되는 상태 값을 받아 해당 값을 반전(`true` ↔ `false`)시킨다.
 * 특정 컴포넌트의 모달 상태를 제어하기 위해 사용된니다.
 * <br>
 * <b style="color:tomato;">주의 사항</b>
 * <br> - 이 함수는 상태와 상태 변경 함수를 직접 받아야 동작한다.
 * <br> - 상태와 상태 변경 함수(`useState`)는 해당 컴포넌트 혹은 부모로부터 전달되어야 한다.
 * <br> - 자식 컴포넌트가 부모 컴포넌트의 상태를 직접 제어하려면 부모로부터 상태 변경 함수를 `props`로 전달받아야 한다.
 * @example
 * //사용 예시
 * const [isModalOpen, setModalOpen] = useState(false);
 *
 * // 상태를 반전시키기
 * modalStateController(isModalOpen, setModalOpen);
 *
 * @example
 * // 부모 상태를 자식에서 제어하는 예시
 * const ParentComponent = () => {
 *   const [isModalOpen, setModalOpen] = useState(false);
 *   return <ChildComponent isModalState={isModalOpen} setModalState={setModalOpen} />;
 * };
 * @version 1.0.0
 * @author 김동우 | 4BEE <4bee.code@gmail.com>
 * @see {@link https://github.com/HSU-Likelion12-yourSide/YourSide-Front/pull/56}
 * @param {boolean} isModalState - 현재 모달의 열림/닫힘 상태 (`true`는 열림, `false`는 닫힘).
 * @param {function} setModalState - `useState`로 생성된 상태 변경 함수. 모달 상태를 업데이트한다.
 */

const modalStateController = (isModalState, setModalState) => {
  setModalState(!isModalState);
};

export default modalStateController;
