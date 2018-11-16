import React, { Component } from "react";
import PropTypes from "prop-types";
import { Components, replaceComponent } from "meteor/vulcan:core";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class CustomModalTrigger extends Component {
  constructor() {
    super();
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      modalIsOpen: false
    };
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const {
      classes,
      trigger,
      component,
      children,
      label,
      size,
      className,
      dialogClassName,
      title,
      modalProps,
      header,
      footer
    } = this.props;

    let triggerComponent = trigger || component;
    triggerComponent = triggerComponent ? (
      React.cloneElement(triggerComponent, { onClick: this.openModal })
    ) : (
      <Button
        color="inherit"
        className={classes.button}
        onClick={this.openModal}
      >
        {label}
      </Button>
      // <a href="javascript:void(0)" onClick={this.openModal}>
      //   {label}
      // </a>
    );
    const childrenComponent = React.cloneElement(children, {
      closeModal: this.closeModal
    });
    const headerComponent =
      header && React.cloneElement(header, { closeModal: this.closeModal });
    const footerComponent =
      footer && React.cloneElement(footer, { closeModal: this.closeModal });

    return (
      <div className="modal-trigger">
        {triggerComponent}
        <Components.Modal
          size={size}
          className={className}
          show={this.state.modalIsOpen}
          onHide={this.closeModal}
          dialogClassName={dialogClassName}
          title={title}
          header={headerComponent}
          footer={footerComponent}
          {...modalProps}
        >
          {childrenComponent}
        </Components.Modal>
      </div>
    );
  }
}

replaceComponent("ModalTrigger", CustomModalTrigger, [withStyles, styles]);
